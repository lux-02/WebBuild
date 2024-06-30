
import { FaComments, FaRegEdit, FaSearch, FaUserShield } from 'react-icons/fa';
import React from 'react';
import { Box, Container, Flex, Heading, Text, Button, Image, Link, VStack, HStack } from '@chakra-ui/react';


import 'tailwindcss/tailwind.css';

const Header = () => (
  <Box as="header" className="bg-white shadow-md py-4">
    <Container display="flex" justifyContent="space-between" alignItems="center">
      <Link fontSize="2xl" fontWeight="bold" href="#">모던 블로그</Link>
      <HStack spacing={6}>
        <Link href="#">Home</Link>
        <Link href="#">Categories</Link>
        <Link href="#">About</Link>
        <Link href="#">Contact</Link>
      </HStack>
    </Container>
  </Box>
);

const HeroSection = () => (
  <Box position="relative" className="overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522202222207-27d6bea67b18)' }}>
    <Container className="py-24 md:py-36">
      <Box maxW="2xl" className="text-center mx-auto">
        <Heading as="h1" className="text-5xl font-bold text-white">Welcome to 모던 블로그</Heading>
        <Text className="mt-4 text-lg text-white">Discover insightful articles and join our community</Text>
        <Button colorScheme="orange" size="lg" className="mt-8">Get Started</Button>
      </Box>
    </Container>
  </Box>
);

const FeaturesSection = () => (
  <Box py={16} className="bg-gray-100">
    <Container maxW="4xl" textAlign="center">
      <Heading as="h2" className="text-3xl font-bold">Key Features</Heading>
      <VStack spacing={8} className="mt-8">
        <HStack spacing={6}>
          <FaComments size="3em" />
          <Box>
            <Heading as="h4" size="lg">Interactive Comments</Heading>
            <Text>Engage with readers through comments and interactive discussions.</Text>
          </Box>
        </HStack>
        <HStack spacing={6}>
          <FaRegEdit size="3em" />
          <Box>
            <Heading as="h4" size="lg">Rich Text Editing</Heading>
            <Text>Create and format your blog posts with ease using our rich text editor.</Text>
          </Box>
        </HStack>
        <HStack spacing={6}>
          <FaSearch size="3em" />
          <Box>
            <Heading as="h4" size="lg">Advanced Search</Heading>
            <Text>Find articles quickly with our powerful search functionality.</Text>
          </Box>
        </HStack>
        <HStack spacing={6}>
          <FaUserShield size="3em" />
          <Box>
            <Heading as="h4" size="lg">User Security</Heading>
            <Text>Your data is safe with our industry-leading security protocols.</Text>
          </Box>
        </HStack>
      </VStack>
    </Container>
  </Box>
);

const ContentSection = () => (
  <Box py={16}>
    <Container maxW="4xl">
      <Heading as="h2" className="text-3xl font-bold text-center">Latest Articles</Heading>
      <VStack spacing={8} className="mt-8">
        <Box className="p-6 bg-white shadow-md rounded-lg">
          <Image src="https://images.unsplash.com/photo-1522202222207-27d6bea67b18" alt="Content Image" className="rounded-md" />
          <Heading as="h4" size="lg" className="mt-4">Sample Article Title</Heading>
          <Text className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...</Text>
        </Box>
        <Box className="p-6 bg-white shadow-md rounded-lg">
          <Image src="https://images.unsplash.com/photo-1522202222207-27d6bea67b18" alt="Content Image" className="rounded-md" />
          <Heading as="h4" size="lg" className="mt-4">Sample Article Title</Heading>
          <Text className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...</Text>
        </Box>
      </VStack>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" className="bg-gray-800 py-8 text-white">
    <Container display="flex" justifyContent="space-between" flexWrap="wrap" gap={6}>
      <VStack alignItems="flex-start">
        <Heading as="h4" size="md">모던 블로그</Heading>
        <Text>Connecting people through stunning articles.</Text>
      </VStack>
      <VStack>
        <Heading as="h4" size="md">Follow Us</Heading>
        <HStack spacing={4}>
          <Link href="#" className="hover:text-orange-500">Facebook</Link>
          <Link href="#" className="hover:text-orange-500">Twitter</Link>
          <Link href="#" className="hover:text-orange-500">Instagram</Link>
        </HStack>
      </VStack>
      <VStack>
        <Heading as="h4" size="md">Legal</Heading>
        <Link href="#" className="hover:text-orange-500">Privacy Policy</Link>
        <Link href="#" className="hover:text-orange-500">Terms of Service</Link>
      </VStack>
    </Container>
  </Box>
);

const App = () => (
  <Box>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <ContentSection />
    <Footer />
  </Box>
);

export default App;

