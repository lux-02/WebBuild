import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { websiteType, features, mood, content } = req.body;
  const prompt = `Create a React component using Tailwind CSS and Chakra UI. The component should be a ${websiteType} website with features like ${features}. The mood should be ${mood}, and it should include content such as ${content}. Return only the JavaScript code for the component. The components must interact and act in practice, and the content must be generated as if it were a real brand.Fill the content that fills the website with mock-up data, just like the actual data.
  The website design has the quality to be listed in the Design Awards and is user-friendly and is made in consideration of accessibility.
  Do not include any explanations, comments, or descriptions. Only the code.
Here is an example of the structure you should follow:

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Button, Input } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';

const BlogComponent = () => {
  return (
    <Box>
      {/* Your component code here */}
    </Box>
  );
};

export default function Page() {
  return (
    <ChakraProvider>
      <BlogComponent />
    </ChakraProvider>
  );
}
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 2000,
    });

    let generatedCode = completion.choices[0].message.content.trim();

    generatedCode = generatedCode.replace(/```(javascript)?/g, "").trim();

    // 페이지 파일명 생성 (예: dynamic-page.js)
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

    res.status(200).json({ pageName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating code" });
  }
}
