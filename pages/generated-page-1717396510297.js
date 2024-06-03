
import React from 'react';
import { Box, Container, Heading, Text, Link, Input, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import 'tailwindcss/tailwind.css';


const BlogHeader = () => (
  <Box className="bg-white shadow-md">
    <Container maxW="7xl" className="flex justify-between items-center p-6">
      <Heading as="h1" size="lg">모던 블로그</Heading>
      <Box className="flex items-center space-x-2">
        <Input 
          placeholder="Search..." 
          size="md" 
          variant="outline" 
          className="rounded-md" 
        />
        <Button 
          variant="solid" 
          colorScheme="blue"
          size="md"
          className="flex items-center"
        >
          <SearchIcon />
        </Button>
      </Box>
    </Container>
  </Box>
);

const BlogPost = ({ title, excerpt, link }) => (
  <Box className="p-4 rounded-lg shadow-lg bg-white mb-4">
    <Heading as="h2" size="md" className="text-blue-600 mb-2">{title}</Heading>
    <Text className="mb-4">{excerpt}</Text>
    <Link href={link} color="blue.500">Read more</Link>
  </Box>
);

const BlogHome = () => (
  <Box className="bg-gray-100 min-h-screen">
    <BlogHeader />
    <Container maxW="7xl" className="py-8">
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogPost 
          title="First Blog Post" 
          excerpt="This is a short excerpt of the first blog post." 
          link="/post/1" 
        />
         <BlogPost 
          title="Second Blog Post" 
          excerpt="This is a short excerpt of the second blog post." 
          link="/post/2" 
        />
        <BlogPost 
          title="Third Blog Post" 
          excerpt="This is a short excerpt of the third blog post." 
          link="/post/3" 
        />
      </Box>
    </Container>
  </Box>
);

export default BlogHome;

