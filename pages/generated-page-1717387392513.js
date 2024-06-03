
import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Input, Heading, Text, Flex } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const blogPosts = [
  {
    id: 1,
    title: 'Modern Web Development Trends',
    description: 'An overview of the modern web development landscape and emerging trends.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    date: 'July 10, 2023',
  },
  {
    id: 2,
    title: 'The Future of AI in Web Design',
    description: 'How artificial intelligence is transforming design processes.',
    content: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus...',
    author: 'Jane Smith',
    date: 'August 01, 2023',
  },
];

const BlogComponent = () => {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const results = blogPosts.filter(post =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPosts(results);
  };

  return (
    <Box className="max-w-7xl mx-auto p-4">
      <Heading as="h1" size="2xl" className="mb-8 text-center">블로그</Heading>
      <Flex className="mb-8" justifyContent="center">
        <Input
          className="w-full sm:w-1/2"
          placeholder="검색..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button colorScheme="blue" onClick={() => handleSearch({ target: { value: searchQuery } })}>
          검색
        </Button>
      </Flex>
      <Box>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Box key={post.id} className="mb-8">
              <Heading as="h2" size="lg" className="mb-2">{post.title}</Heading>
              <Text className="text-gray-600 mb-4">{post.description}</Text>
              <Text className="text-sm text-gray-500 mb-2">By {post.author} on {post.date}</Text>
              <Text className="text-justify">{post.content}</Text>
            </Box>
          ))
        ) : (
          <Text className="text-center text-gray-500">No blog posts found.</Text>
        )}
      </Box>
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

