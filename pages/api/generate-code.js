import OpenAI from "openai";
import unsplash from "./unsplash";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getUnsplashImage(keyword) {
  const result = await unsplash.search.getPhotos({
    query: keyword,
    perPage: 1,
  });

  if (result.response && result.response.results.length > 0) {
    return result.response.results[0].urls.regular;
  } else {
    return null;
  }
}

export default async function handler(req, res) {
  const { srs, websiteType, features } = req.body; // websiteType과 features를 req.body에서 가져옴
  const prompt = `Based on the following System Requirements Specification (SRS), create a highly engaging and visually appealing React component using Tailwind CSS and Chakra UI. Ensure the design is top-notch and suitable for design awards, with a user-friendly interface and excellent accessibility.
  
  SRS:
  ${srs}
  
  The component should include:
  - A header with a logo and navigation links
  - A visually stunning hero section with a background image, headline, and call-to-action button
  - A features section highlighting key features with icons and descriptions
  - A content section with placeholder text and images
  - A footer with links to social media and contact information

  For the hero section, use the keyword '${websiteType}' to fetch an image from Unsplash.
  For the features section, use the keyword '${features}' to fetch images from Unsplash.
  
  Return only the JavaScript code for the component. Do not include any explanations, comments, or descriptions. Only the code.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 2000,
    });

    let generatedCode = completion.choices[0].message.content.trim();

    generatedCode = generatedCode.replace(/```(javascript)?/g, "").trim();

    // Fetch images from Unsplash
    const heroImage = await getUnsplashImage(websiteType);
    const featureImage = await getUnsplashImage(features);

    // Replace placeholders with image URLs
    generatedCode = generatedCode.replace("{heroImage}", heroImage || "");
    generatedCode = generatedCode.replace("{featureImage}", featureImage || "");

    res.status(200).json({ code: generatedCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating code" });
  }
}
