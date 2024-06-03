
import React from 'react';
import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon, AtSignIcon, ChatIcon, ViewIcon } from '@chakra-ui/icons';
import 'tailwindcss/tailwind.css';


const BlogComponent = () => {
  return (
    <Box className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Modern Blog</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:text-blue-300">Home</a>
            <a href="#" className="hover:text-blue-300">Blog</a>
            <a href="#" className="hover:text-blue-300">About</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </nav>
        </div>
      </header>

      <Box className="flex-grow">
        <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?landscape')" }}>
          <div className="container mx-auto text-center text-white">
            <Heading as="h1" size="2xl" className="mb-4">Explore the World of Blogs</Heading>
            <Button colorScheme="blue" size="lg" className="mt-6">Get Started</Button>
          </div>
        </section>

        <section className="py-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <Box className="bg-white shadow-lg p-6 rounded-lg">
            <SearchIcon boxSize={10} className="mb-4 text-blue-700" />
            <Heading as="h3" size="lg" className="mb-4">Search Blogs</Heading>
            <Text>Find content easily with our full-text search feature.</Text>
          </Box>
          <Box className="bg-white shadow-lg p-6 rounded-lg">
            <AtSignIcon boxSize={10} className="mb-4 text-blue-700" />
            <Heading as="h3" size="lg" className="mb-4">Author Profiles</Heading>
            <Text>Connect and engage with your favorite authors.</Text>
          </Box>
          <Box className="bg-white shadow-lg p-6 rounded-lg">
            <ChatIcon boxSize={10} className="mb-4 text-blue-700" />
            <Heading as="h3" size="lg" className="mb-4">Comments</Heading>
            <Text>Join the discussions and share your thoughts.</Text>
          </Box>
          <Box className="bg-white shadow-lg p-6 rounded-lg">
            <ViewIcon boxSize={10} className="mb-4 text-blue-700" />
            <Heading as="h3" size="lg" className="mb-4">Analytics</Heading>
            <Text>Track engagement and monitor performance.</Text>
          </Box>
        </section>

        <section className="pb-12 container mx-auto">
          <div className="space-y-8">
            <Box className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-6">
              <Image boxSize="150px" src="https://source.unsplash.com/random?blog" alt="Blog Image" borderRadius="md" />
              <div>
                <Heading as="h3" size="lg" className="mb-2">Blog Post Title</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </div>
            </Box>
            <Box className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-6">
              <Image boxSize="150px" src="https://source.unsplash.com/random?reading" alt="Reading Image" borderRadius="md" />
              <div>
                <Heading as="h3" size="lg" className="mb-2">Another Blog Post</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              </div>
            </Box>
          </div>
        </section>
      </Box>

      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
          </div>
          <Text>&copy; 2023 Modern Blog. All Rights Reserved.</Text>
        </div>
      </footer>
    </Box>
  );
};

export default BlogComponent;

