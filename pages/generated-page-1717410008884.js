
import React from 'react';
import { ChakraProvider, Box, Heading, Text, Button, Stack, Image, Link, Flex, Icon, Input } from "@chakra-ui/react";
import '@fontsource/inter';
import { SearchIcon } from '@chakra-ui/icons';


function BlogComponent() {
  return (
    <ChakraProvider>
      <Box className="bg-white">
        <Box as="header" bg="gray-100" py="4">
          <Flex justify="space-between" align="center" maxW="7xl" mx="auto" px="4">
            <Box>
              <Heading size="lg" textColor="teal.600">블로그</Heading>
            </Box>
            <Flex align="center">
              <Flex as="nav" gap="4">
                <Link href="#" textColor="gray.600">Home</Link>
                <Link href="#" textColor="gray.600">Blog</Link>
                <Link href="#" textColor="gray.600">Products</Link>
                <Link href="#" textColor="gray.600">About</Link>
                <Link href="#" textColor="gray.600">Contact</Link>
              </Flex>
              <Input placeholder="검색..." maxW="200px" ml="4" />
              <Button ml="2" variant="outline" colorScheme="teal"><SearchIcon /></Button>
            </Flex>
          </Flex>
        </Box>

        <Box as="section" position="relative">
          <Image src="https://via.placeholder.com/1200" alt="Hero Image" w="full" h="60vh" objectFit="cover"/>
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white">
            <Heading size="2xl">Welcome to Our Blog</Heading>
            <Text fontSize="xl" mt="4">Discover our latest articles and products</Text>
            <Button mt="6" size="lg" colorScheme="teal">Get Started</Button>
          </Box>
        </Box>

        <Box as="section" py="16" bg="gray.50">
          <Stack direction={["column", "row"]} spacing="10" maxW="7xl" mx="auto" px="4" textAlign="center">
            <Box flex="1">
              <Icon as={SearchIcon} w="16" h="16" color="teal.500" />
              <Heading mt="4" size="md">User Authentication</Heading>
              <Text mt="2">Sign up, log in, and social media authentication.</Text>
            </Box>
            <Box flex="1">
              <Icon as={SearchIcon} w="16" h="16" color="teal.500" />
              <Heading mt="4" size="md">Search Functionality</Heading>
              <Text mt="2">Advanced search filters by category, date, and popularity.</Text>
            </Box>
            <Box flex="1">
              <Icon as={SearchIcon} w="16" h="16" color="teal.500" />
              <Heading mt="4" size="md">Manage Content</Heading>
              <Text mt="2">Create, edit, and delete posts and product listings.</Text>
            </Box>
          </Stack>
        </Box>

        <Box as="section" py="16">
          <Stack maxW="7xl" mx="auto" px="4" spacing="8">
            <Flex direction={["column", "row"]} align="center" gap="8">
              <Box flex="1">
                <Image src="https://via.placeholder.com/400" alt="Blog Image" borderRadius="md" />
              </Box>
              <Box flex="1">
                <Heading size="lg">Article Title</Heading>
                <Text mt="4" fontSize="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac urna neque.</Text>
                <Button mt="4" size="md" colorScheme="teal">Read More</Button>
              </Box>
            </Flex>
          </Stack>
        </Box>

        <Box as="footer" py="8" bg="gray.800" color="gray.200">
          <Stack maxW="7xl" mx="auto" px="4" spacing="6" textAlign="center">
            <Flex justify="center" gap="4">
              <Link href="#" textColor="gray.400">Facebook</Link>
              <Link href="#" textColor="gray.400">Twitter</Link>
              <Link href="#" textColor="gray.400">LinkedIn</Link>
              <Link href="#" textColor="gray.400">Instagram</Link>
            </Flex>
            <Text>&copy; 2023 블로그. All rights reserved.</Text>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default BlogComponent;

