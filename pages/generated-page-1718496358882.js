
import {  } from 'react-icons/fa';
import '@fontsource/roboto';
import '@fontsource/open-sans';
import React from "react";
import { ChakraProvider, Box, Flex, Heading, Text, Button, Link, Image, VStack, HStack } from "@chakra-ui/react";
import { FaComments, FaRegEdit, FaSearch, FaUserShield } from "react-icons/fa";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "tailwindcss/tailwind.css";


const App = () => (
  <ChakraProvider>
    <Box as="header" bg="gray-900" px={6} py={4} className="text-white">
      <Flex align="center" justify="space-between">
        <Heading size="lg" fontFamily="Roboto">Blog Logo</Heading>
        <HStack spacing={8}>
          <Link href="#" className="hover:text-gray-400">Home</Link>
          <Link href="#" className="hover:text-gray-400">About</Link>
          <Link href="#" className="hover:text-gray-400">Contact</Link>
        </HStack>
      </Flex>
    </Box>

    <Box 
      as="section" 
      bgImage="url('https://source.unsplash.com/1600x900/?desk,laptop,coffee')" 
      bgSize="cover" 
      bgPos="center" 
      color="white" 
      textAlign="center" 
      py={20}
    >
      <Heading fontSize={["3xl", "4xl", "5xl"]} mb={4} fontFamily="Roboto">Read Our Latest Posts</Heading>
      <Button colorScheme="teal" size="lg">Get Started</Button>
    </Box>

    <Box as="section" bg="white" py={12} px={6} textAlign="center">
      <VStack spacing={8}>
        <Box>
          <FaRegEdit size={48} className="text-teal-500" />
          <Heading size="md" mt={4} fontFamily="Open Sans">Create Blog Posts</Heading>
          <Text mt={2} fontFamily="Open Sans">Easily write and publish your thoughts.</Text>
        </Box>
        <Box>
          <FaSearch size={48} className="text-teal-500" />
          <Heading size="md" mt={4} fontFamily="Open Sans">Search Content</Heading>
          <Text mt={2} fontFamily="Open Sans">Find posts that match your interests.</Text>
        </Box>
        <Box>
          <FaComments size={48} className="text-teal-500" />
          <Heading size="md" mt={4} fontFamily="Open Sans">Engage in Discussions</Heading>
          <Text mt={2} fontFamily="Open Sans">Comment and interact with others.</Text>
        </Box>
        <Box>
          <FaUserShield size={48} className="text-teal-500" />
          <Heading size="md" mt={4} fontFamily="Open Sans">Secure User Data</Heading>
          <Text mt={2} fontFamily="Open Sans">Your data is safe with us.</Text>
        </Box>
      </VStack>
    </Box>

    <Box as="section" bg="gray-100" py={12} px={6} textAlign="center">
      <Heading size="lg" mb={8} fontFamily="Roboto">Latest Posts</Heading>
      <Flex wrap="wrap" justify="center">
        <Box 
          bg="white" 
          boxShadow="md" 
          borderRadius="md" 
          overflow="hidden" 
          m={4} 
          maxW="sm"
          className="transform transition duration-300 hover:scale-105"
        >
          <Image 
            alt="Blog post thumbnail" 
            src="https://via.placeholder.com/400x300" 
          />
          <Box p={4}>
            <Heading size="md" fontFamily="Open Sans">Blog Post Title</Heading>
            <Text mt={2}>A brief excerpt of the blog post.</Text>
          </Box>
        </Box>
        <Box 
          bg="white" 
          boxShadow="md" 
          borderRadius="md" 
          overflow="hidden" 
          m={4} 
          maxW="sm"
          className="transform transition duration-300 hover:scale-105"
        >
          <Image 
            alt="Blog post thumbnail" 
            src="https://via.placeholder.com/400x300" 
          />
          <Box p={4}>
            <Heading size="md" fontFamily="Open Sans">Blog Post Title</Heading>
            <Text mt={2}>A brief excerpt of the blog post.</Text>
          </Box>
        </Box>
      </Flex>
    </Box>

    <Box as="footer" bg="gray-900" color="white" py={8} textAlign="center">
      <HStack spacing={4} justify="center" mb={4}>
        <Link href="#" className="hover:text-gray-400">Twitter</Link>
        <Link href="#" className="hover:text-gray-400">Facebook</Link>
        <Link href="#" className="hover:text-gray-400">Instagram</Link>
      </HStack>
      <Text fontFamily="Open Sans">© {new Date().getFullYear()} Blog Website. All rights reserved.</Text>
    </Box>
  </ChakraProvider>
);

export default App;

