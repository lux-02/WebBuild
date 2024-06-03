
import React from 'react';
import { ChakraProvider, Box, Input, Button, Stack, Heading, Text, useToast } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const BlogComponent = () => {
  const toast = useToast();

  const handleSearch = (e) => {
    e.preventDefault();
    toast({
      title: "Search initiated.",
      description: "Searching for blog posts...",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box className="min-h-screen bg-gray-100 p-4">
        <Box className="bg-white rounded-lg shadow-md max-w-3xl mx-auto p-8">
          <Heading className="text-2xl mb-4">Modern 블로그 Website</Heading>
          <Box as="form" onSubmit={handleSearch} className="mb-4">
            <Stack direction="row" spacing={4} align="center">
              <Input placeholder="Search 블로그 글" size="md" className="w-full" />
              <Button type="submit" colorScheme="blue">Search</Button>
            </Stack>
          </Box>
          <Box>
            <Text className="text-lg mb-4">Recent 블로그 글:</Text>
            {/* Example blog posts */}
            <Box className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
              <Heading className="text-xl">Blog Post Title 1</Heading>
              <Text className="mt-2 text-gray-600">This is a brief summary of the blog post content...</Text>
            </Box>
            <Box className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
              <Heading className="text-xl">Blog Post Title 2</Heading>
              <Text className="mt-2 text-gray-600">This is a brief summary of the blog post content...</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default BlogComponent;

