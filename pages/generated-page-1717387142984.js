
import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Input, Stack, Heading, Text } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const BlogComponent = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([
    { title: '뉴스 기사 1', content: '여기에 뉴스 기사 1의 내용이 표시됩니다.' },
    { title: '뉴스 기사 2', content: '여기에 뉴스 기사 2의 내용이 표시됩니다.' },
    { title: '뉴스 기사 3', content: '여기에 뉴스 기사 3의 내용이 표시됩니다.' },
  ]);

  const handleSearch = () => {
    // Normally, fetch and filter news using query
    console.log(`Searching for ${query}`);
  };

  return (
    <Box className="min-h-screen bg-white flex flex-col items-center p-6">
      <Heading className="mb-4 text-4xl font-semibold text-gray-800">검색 포털</Heading>
      <Stack direction="row" spacing={4} className="mb-8 w-full max-w-lg">
        <Input 
          className="flex-grow" 
          placeholder="검색어를 입력하세요..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSearch}>
          검색
        </Button>
      </Stack>
      <Heading className="mb-4 text-2xl font-semibold text-gray-800">뉴스 기사</Heading>
      <Stack spacing={6} className="w-full max-w-2xl">
        {news.map((article, index) => (
          <Box key={index} className="p-4 border rounded-lg shadow-md">
            <Heading size="md" className="mb-2">{article.title}</Heading>
            <Text>{article.content}</Text>
          </Box>
        ))}
      </Stack>
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

