import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { text } = req.body;
  const prompt = `Extract the most relevant English keywords from the following text to use for image search:
  
  Text:
  ${text}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 60,
    });

    const keywords = completion.choices[0].message.content.trim();

    res.status(200).json({ keywords });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error extracting keywords" });
  }
}
