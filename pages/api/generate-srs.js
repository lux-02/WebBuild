import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { websiteType, features, mood, content } = req.body;
  const prompt = `Create a System Requirements Specification (SRS) for a ${websiteType} website with features like ${features}. The mood should be ${mood}, and it should include content such as ${content}. The SRS should focus on:
1. Specific Requirements
2. UI/UX Design
3. Accessibility Considerations
Provide detailed information on the functionalities and design accessibility aspects of the website.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 2000,
    });

    let srs = completion.choices[0].message.content.trim();

    res.status(200).json({ srs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating SRS" });
  }
}
