
import { FaComments, FaRegEdit, FaSearch, FaUserShield } from 'react-icons/fa';
import '@fontsource/roboto';
import '@fontsource/open-sans';
import React from 'react';
import { ChakraProvider, Box, Heading, Text, Link, Button, VStack, HStack, Image, Icon, Flex, Spacer, useColorMode } from '@chakra-ui/react';


import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import '@fontsource/roboto';
import '@fontsource/open-sans';

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
  breakpoints,
});

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <Box as="header" bg="gray.800" color="white" px={4} py={2}>
        <Flex>
          <Box>
            <Heading size="md">블로그</Heading>
          </Box>
          <Spacer />
          <HStack spacing={8}>
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">About</Link>
            <Link href="#">Profile</Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark Mode" : "Light Mode"}
            </Button>
          </HStack>
        </Flex>
      </Box>
      
      <Box as="section" position="relative" textAlign="center" color="white">
        <Image src="https://source.unsplash.com/random/1600x900" alt="Hero Background" objectFit="cover" w="100%" h="100%" position="absolute" top="0" left="0" zIndex="-1" />
        <Box py={40} bg="rgba(0, 0, 0, 0.6)">
          <Heading fontSize="4xl" mb={4}>Welcome to Our Modern 블로그</Heading>
          <Button size="lg" colorScheme="teal">Get Started</Button>
        </Box>
      </Box>
      
      <Box as="section" py={16} bg="gray.100">
        <VStack spacing={12}>
          <Heading size="xl">Features</Heading>
          <Flex wrap="wrap" justify="center" maxW="800px" spacing={8}>
            <VStack w="250px" p={4} bg="white" boxShadow="md" borderRadius="md">
              <Icon as={FaSearch} w={10} h={10} color="teal.500" />
              <Text>검색 Functionality</Text>
            </VStack>
            <VStack w="250px" p={4} bg="white" boxShadow="md" borderRadius="md">
              <Icon as={FaRegEdit} w={10} h={10} color="teal.500" />
              <Text>블로그 글 Management</Text>
            </VStack>
            <VStack w="250px" p={4} bg="white" boxShadow="md" borderRadius="md">
              <Icon as={FaComments} w={10} h={10} color="teal.500" />
              <Text>Comment System</Text>
            </VStack>
            <VStack w="250px" p={4} bg="white" boxShadow="md" borderRadius="md">
              <Icon as={FaUserShield} w={10} h={10} color="teal.500" />
              <Text>Secure Authentication</Text>
            </VStack>
          </Flex>
        </VStack>
      </Box>
      
      <Box as="section" py={16}>
        <Heading size="xl" textAlign="center" mb={12}>Latest Articles</Heading>
        <VStack spacing={8}>
          <Box w="full" maxW="800px" p={4} boxShadow="md" borderRadius="md">
            <Image src="https://source.unsplash.com/random/800x500" alt="Article" borderRadius="md"/>
            <Heading size="md" mt={4}>Sample Article</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box w="full" maxW="800px" p={4} boxShadow="md" borderRadius="md">
            <Image src="https://source.unsplash.com/random/800x500" alt="Article" borderRadius="md"/>
            <Heading size="md" mt={4}>Sample Article</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
         </VStack>
       </Box>
       
       <Box as="footer" bg="gray.800" color="white" py={4}>
         <Flex justify="space-between" align="center" maxW="800px" mx="auto">
           <Text>&copy; 2023 블로그</Text>
           <HStack spacing={4}>
             <Link href="#"><Icon as={FaUserShield} w={5} h={5} /></Link>
             <Link href="#"><Icon as={FaRegEdit} w={5} h={5} /></Link>
           </HStack>
         </Flex>
       </Box>
    </ChakraProvider>
  );
}

export default Home;

