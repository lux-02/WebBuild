
import React from 'react';
import { ChakraProvider, Box, Input, VStack, Heading, Text, Button, Link, HStack } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const BlogPost = ({ title, date, excerpt, link }) => (
  <Box className="p-6 bg-white rounded-lg shadow-lg">
    <Heading as="h3" size="lg" mb={4}>{title}</Heading>
    <Text fontSize="sm" color="gray.500" mb={4}>{date}</Text>
    <Text mb={4}>{excerpt}</Text>
    <Link href={link} color="blue.500" textDecoration="underline">Read more</Link>
  </Box>
);

const BlogComponent = () => {
  return (
    <Box bg="gray.50" minH="100vh" p={6}>
      <VStack spacing={6} maxW="3xl" mx="auto">
        <Heading as="h1" size="2xl">모던 블로그</Heading>
        <Input 
          placeholder="검색" 
          size="lg"
          className="w-full border-none shadow-md hover:shadow-lg focus:ring focus:ring-blue-500"
        />
        <VStack spacing={6} w="full">
          <BlogPost
            title="해커톤에서 배운 5가지"
            date="2023-10-01"
            excerpt="이번 해커톤에서 많은 것을 배웠습니다. 그 중 5가지를 공유하고자 합니다..."
            link="#"
          />
          <BlogPost
            title="모던 웹 개발의 중요성"
            date="2023-09-25"
            excerpt="모던 웹 개발은 사용자 경험을 크게 향상시킬 수 있습니다. 그 이유는..."
            link="#"
          />
          <BlogPost
            title="리액트와 Chakra UI로 만들기"
            date="2023-09-15"
            excerpt="리액트와 Chakra UI를 사용하여 쉽고 빠르게 아름다운 UI를 만들 수 있습니다..."
            link="#"
          />
        </VStack>
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

