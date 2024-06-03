import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { srs } = req.body;
  const prompt = `Based on the following System Requirements Specification (SRS), create a React component using Tailwind CSS and Chakra UI. Ensure the component matches the requirements specified in the SRS.
  
  SRS:
  ${srs}
  
  Return only the JavaScript code for the component. Do not include any explanations, comments, or descriptions. Only the code.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 2000,
    });

    let generatedCode = completion.choices[0].message.content.trim();

    generatedCode = generatedCode.replace(/```(javascript)?/g, "").trim();

    const pageName = `generated-page-${Date.now()}.js`;
    // 절대 URL 사용
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    await fetch(`${baseUrl}/api/create-page`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: generatedCode, pageName }),
    });

    res.status(200).json({ code: generatedCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating code" });
  }
}
