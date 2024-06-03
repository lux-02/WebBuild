
import React from "react";
import { ChakraProvider, Box, Input, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import 'tailwindcss/tailwind.css';


const BlogSearchComponent = () => {
  return (
    <ChakraProvider>
      <Box className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Container maxW="xl" centerContent>
          <VStack spacing={8} className="p-8 bg-white rounded shadow-lg">
            <Heading as="h1" size="2xl" className="text-center">블로그 검색</Heading>
            <Input
              placeholder="검색어를 입력하세요"
              size="lg"
              className="w-full"
              variant="outline"
              focusBorderColor="teal.400"
            />
            <Button
              leftIcon={<SearchIcon />}
              colorScheme="teal"
              size="lg"
              className="w-full"
            >
              검색
            </Button>
            <Box className="mt-8 w-full">
              <Text className="text-lg text-gray-700 text-center">검색 결과:</Text>
              {/* Sample search results */}
              <Box className="mt-4 p-4 bg-gray-100 rounded">
                <Heading as="h2" size="md">샘플 블로그 글 제목 1</Heading>
                <Text className="mt-2 text-gray-600">
                  이곳에 블로그 글 내용을 입력합니다. 샘플 텍스트로 내용을 대체합니다.
                </Text>
              </Box>
              <Box className="mt-4 p-4 bg-gray-100 rounded">
                <Heading as="h2" size="md">샘플 블로그 글 제목 2</Heading>
                <Text className="mt-2 text-gray-600">
                  이곳에 블로그 글 내용을 입력합니다. 샘플 텍스트로 내용을 대체합니다.
                </Text>
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default BlogSearchComponent;

