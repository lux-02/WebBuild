
import React from 'react';
import { ChakraProvider, Box, Input, VStack, Text, Button, HStack, Link } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const BlogPost = ({ title, date, summary, link }) => (
  <Box className="p-6 mb-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
    <Link href={link} className="text-2xl font-semibold text-gray-800 hover:text-indigo-600">
      {title}
    </Link>
    <Text className="mt-2 text-sm text-gray-600">{date}</Text>
    <Text className="mt-4">{summary}</Text>
  </Box>
);

const SearchBar = ({ onSearch }) => (
  <HStack className="p-6 mb-4 bg-white rounded-lg shadow-md">
    <Input className="flex-grow" placeholder="검색" />
    <Button onClick={onSearch} colorScheme="teal">
      검색
    </Button>
  </HStack>
);

const BlogComponent = () => {
  return (
    <Box className="max-w-4xl mx-auto py-10 px-4">
      <Text className="text-4xl font-bold mb-8 text-center">모던 블로그</Text>
      <SearchBar />
      <VStack spacing={6} align="stretch">
        <BlogPost
          title="2023년 웹 개발 트렌드"
          date="2023-10-01"
          summary="이번 포스트에서는 2023년에 주목해야 할 웹 개발 트렌드를 살펴봅니다."
          link="#"
        />
        <BlogPost
          title="Tailwind CSS 활용법"
          date="2023-09-20"
          summary="Tailwind CSS를 사용하여 빠르고 효율적으로 스타일링 하는 방법."
          link="#"
        />
        <BlogPost
          title="Chakra UI 시작하기"
          date="2023-09-15"
          summary="Chakra UI를 사용하여 접근 가능한 React 컴포넌트를 만드는 방법."
          link="#"
        />
      </VStack>
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

