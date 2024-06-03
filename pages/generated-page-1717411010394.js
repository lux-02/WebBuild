
import React from 'react';
import { Box, Flex, VStack, Heading, Text, Button, Image, Icon } from "@chakra-ui/react";
import { FaSearch, FaPenNib, FaComments } from "react-icons/fa";
import 'tailwindcss/tailwind.css';


const BlogComponent = () => (
  <Box as="main" className="min-h-screen bg-gray-100">
    <header className='bg-white shadow-md px-6 py-4'>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="lg">모던 블로그</Heading>
        <nav>
          <a href="/" className="mr-4 text-gray-700">홈</a>
          <a href="/about" className="mr-4 text-gray-700">소개</a>
        </nav>
      </Flex>
    </header>
    
    <Box className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center text-center" style={{backgroundImage: 'url(https://source.unsplash.com/1600x900/?블로그)'}}>
      <VStack>
        <Heading size="2xl" className='text-white'>모던 블로그에 오신 것을 환영합니다</Heading>
        <Button colorScheme="teal" size="lg" mt="4">시작하기</Button>
      </VStack>
    </Box>
    
    <Box className='py-16 bg-white'>
      <Flex justifyContent="space-evenly">
        <VStack>
          <Icon as={FaSearch} boxSize="10" />
          <Heading size="md">검색 기능</Heading>
          <Text>빠르고 정확한 검색 기능을 제공합니다.</Text>
        </VStack>
        <VStack>
          <Icon as={FaPenNib} boxSize="10" />
          <Heading size="md">블로그 글</Heading>
          <Text>새로운 글을 작성하고 관리하세요.</Text>
        </VStack>
        <VStack>
          <Icon as={FaComments} boxSize="10" />
          <Heading size="md">댓글과 상호작용</Heading>
          <Text>다른 사용자와 소통하세요.</Text>
        </VStack>
      </Flex>
    </Box>
    
    <Box className='py-16 bg-gray-50'>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box width="full" maxW="md" m="4" p="4" bg="white" shadow="md" borderRadius="md">
          <Image src="https://source.unsplash.com/1600x900/?검색" alt="Feature Image" borderRadius="md" />
          <Heading size="md" mt="4">블로그 포스트 제목</Heading>
          <Text mt="2">여기에 블로그 포스트 내용이 들어갑니다.</Text>
        </Box>
        <Box width="full" maxW="md" m="4" p="4" bg="white" shadow="md" borderRadius="md">
          <Image src="https://source.unsplash.com/1600x900/?검색" alt="Feature Image" borderRadius="md" />
          <Heading size="md" mt="4">블로그 포스트 제목</Heading>
          <Text mt="2">여기에 블로그 포스트 내용이 들어갑니다.</Text>
        </Box>
      </Flex>
    </Box>
    
    <footer className='bg-gray-800 py-8 text-center text-white'>
      <Text>&copy; 2023 모던 블로그. All rights reserved.</Text>
      <Flex justifyContent="center" mt="4">
        <a href="#" className="mx-2">Facebook</a>
        <a href="#" className="mx-2">Twitter</a>
        <a href="#" className="mx-2">Instagram</a>
      </Flex>
    </footer>
  </Box>
);

export default BlogComponent;

