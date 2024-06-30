
import { FaComments, FaRegEdit, FaSearch, FaUserShield } from 'react-icons/fa';
import React from 'react';
import { Box, Flex, Heading, Text, Button, HStack, VStack, Image, Link } from '@chakra-ui/react';


import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/roboto';
import '@fontsource/open-sans';

const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Open Sans, sans-serif',
  },
  colors: {
    primary: '#3182CE',
    secondary: '#2D3748',
  },
});

const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="white" color="secondary" fontFamily="body">
      <Flex as="header" justify="space-between" align="center" p="4" bg="primary" color="white">
        <Heading as="h1" size="lg">블로그</Heading>
        <HStack spacing="4">
          <Link href="#">Home</Link>
          <Link href="#">Features</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      <Box as="section" bgImage="url('https://source.unsplash.com/random/1600x900?modern-blog-homepage')" bgPos="center" bgSize="cover" py="16" color="white" textAlign="center">
        <Heading as="h2" size="2xl" mb="4">Welcome to Our Blog!</Heading>
        <Text fontSize="xl" mb="8">Discover the latest articles and trends.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      <Box as="section" py="16" bg="gray.50">
        <Heading as="h2" textAlign="center" mb="8">Our Features</Heading>
        <Flex maxW="1200px" mx="auto" justify="space-around">
          <VStack spacing="4" textAlign="center">
            <Box as={FaRegEdit} size="48px" color="primary" />
            <Heading as="h3" size="md">Create Posts</Heading>
            <Text>Create, edit, and manage your blog posts with ease.</Text>
          </VStack>
          <VStack spacing="4" textAlign="center">
            <Box as={FaSearch} size="48px" color="primary" />
            <Heading as="h3" size="md">Search Functionality</Heading>
            <Text>Find the content you love quickly and easily.</Text>
          </VStack>
          <VStack spacing="4" textAlign="center">
            <Box as={FaComments} size="48px" color="primary" />
            <Heading as="h3" size="md">Commenting System</Heading>
            <Text>Engage with readers through comments and replies.</Text>
          </VStack>
          <VStack spacing="4" textAlign="center">
            <Box as={FaUserShield} size="48px" color="primary" />
            <Heading as="h3" size="md">User Profiles</Heading>
            <Text>Manage your personal information with a secure profile.</Text>
          </VStack>
        </Flex>
      </Box>

      <Box as="section" py="16">
        <Heading as="h2" textAlign="center" mb="8">Latest Articles</Heading>
        <Flex maxW="1200px" mx="auto" justify="space-around" wrap="wrap">
          <Box w="300px" m="4">
            <Image src="https://source.unsplash.com/random/300x200?modern-blog-post" alt="Post 1" />
            <Heading as="h3" size="md" mt="4">Article Title 1</Heading>
            <Text mt="2">This is a brief summary of the article.</Text>
          </Box>
          <Box w="300px" m="4">
            <Image src="https://source.unsplash.com/random/300x200?modern-blog-post" alt="Post 2" />
            <Heading as="h3" size="md" mt="4">Article Title 2</Heading>
            <Text mt="2">This is a brief summary of the article.</Text>
          </Box>
        </Flex>
      </Box>

      <Box as="footer" py="8" bg="primary" color="white" textAlign="center">
        <Text>&copy; 2023 블로그. All rights reserved.</Text>
        <HStack justify="center" mt="4" spacing="4">
          <Link href="#" isExternal>
            <FaComments size="24px" />
          </Link>
          <Link href="#" isExternal>
            <FaRegEdit size="24px" />
          </Link>
          <Link href="#" isExternal>
            <FaSearch size="24px" />
          </Link>
          <Link href="#" isExternal>
            <FaUserShield size="24px" />
          </Link>
        </HStack>
      </Box>
    </Box>
  </ChakraProvider>
);

export default App;

