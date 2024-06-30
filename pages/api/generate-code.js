// api/generate-code.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getDalleImage(prompt) {
  const res = await fetch("http://localhost:3000/api/dalle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  });

  const data = await res.json();
  return data.url;
}

export default async function handler(req, res) {
  const { srs, websiteType, features } = req.body;

  const prompt = `Based on the following System Requirements Specification (SRS), create a highly engaging and visually appealing React component using Tailwind CSS and Chakra UI. Ensure the design is top-notch and suitable for design awards, with a user-friendly interface and excellent accessibility.
  
  SRS:
  ${srs}
  
  The component should include:
  - A header with a logo and navigation links
  - A visually stunning hero section with a background image, headline, and call-to-action button
  - A features section highlighting key features with icons and descriptions
  - A content section with placeholder text and images
  - A footer with links to social media and contact information
  - Use react-icons for icons (e.g., FaComments, FaRegEdit, FaSearch, FaUserShield)
  - Use Roboto and Open Sans fonts

  Return only the JavaScript code for the component. Do not include any explanations, comments, or descriptions. Only the code.
  
  Here is an example of the structure you should follow:

  
  import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Text, Button, Image, Link, Icon, Grid, extendTheme } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';
import { FaComments, FaRegEdit, FaSearch, FaUserShield } from 'react-icons/fa'; // Consolidated import
import '@fontsource/roboto';
import '@fontsource/open-sans';

const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

const BlogComponent = () => {
  return (
    <Box>
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: "url(${heroImage})" }}>
        <h1 className="text-4xl text-white">Welcome to Our Blog</h1>
        <Button>Get Started</Button>
      </header>
      <section>
        <h2>Features</h2>
        <div className="flex">
          <div className="w-1/3">
            <img src={featureImage} alt="Feature" />
            <p>Feature description</p>
          </div>
          <Box className="text-center">
            <Text className="text-4xl mb-2"><FaComments /></Text>
            <Text className="font-bold">Comment System</Text>
            <Text>Engage with readers.</Text>
          </Box>
        </div>
      </section>
    </Box>
  );
};

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
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

    // Fetch images from DALL-E using the extracted keywords
    const heroImage = await getDalleImage(
      `hero image for ${websiteType} website`
    );
    const featureImage = await getDalleImage(`feature image for ${features}`);

    // Replace placeholders with image URLs
    generatedCode = generatedCode.replace("{heroImage}", heroImage || "");
    generatedCode = generatedCode.replace("{featureImage}", featureImage || "");

    // Extract icon imports and avoid duplicates
    const iconMatches =
      generatedCode.match(/import {([^}]+)} from 'react-icons\/fa';/g) || [];
    const iconSet = new Set();
    iconMatches.forEach((match) => {
      const icons = match.match(/Fa\w+/g);
      icons.forEach((icon) => iconSet.add(icon));
    });

    const iconImports = `import { ${Array.from(iconSet).join(
      ", "
    )} } from 'react-icons/fa';\n`;

    // Add font imports
    const fontImports = `import '@fontsource/roboto';\nimport '@fontsource/open-sans';\n`;

    generatedCode = generatedCode.replace(
      /import {([^}]+)} from 'react-icons\/fa';/g,
      ""
    ); // Remove all previous icon imports
    generatedCode = iconImports + fontImports + generatedCode; // Add the consolidated icon and font imports

    res.status(200).json({ code: generatedCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error generating code" });
  }
}
