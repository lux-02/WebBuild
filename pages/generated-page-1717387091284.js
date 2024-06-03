
import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Input, Container, Heading, Text, Image, VStack, HStack } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const PortfolioItem = ({ title, description, imageUrl }) => (
  <Box className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <Box p={6}>
      <Heading size="lg">{title}</Heading>
      <Text mt={4}>{description}</Text>
    </Box>
  </Box>
);

const PortfolioList = ({ items }) => (
  <VStack spacing={8}>
    {items.map((item, index) => (
      <PortfolioItem key={index} {...item} />
    ))}
  </VStack>
);

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <HStack as="form" spacing={4} onSubmit={handleSubmit} className="w-full">
      <Input
        placeholder="검색..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full"
      />
      <Button type="submit" colorScheme="teal">
        검색
      </Button>
    </HStack>
  );
};

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', imageUrl: 'https://via.placeholder.com/400' },
  { title: 'Project 2', description: 'Description of Project 2', imageUrl: 'https://via.placeholder.com/400' },
  { title: 'Project 3', description: 'Description of Project 3', imageUrl: 'https://via.placeholder.com/400' },
];

const PortfolioComponent = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (query) => {
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  return (
    <Container maxW="container.lg" className="py-12">
      <Heading className="text-center mb-8" size="2xl">
        내 포트폴리오
      </Heading>
      <Box mb={8}>
        <SearchBar onSearch={handleSearch} />
      </Box>
      <PortfolioList items={filteredProjects} />
    </Container>
  );
};

export default function Page() {
  return (
    <ChakraProvider>
      <PortfolioComponent />
    </ChakraProvider>
  );
}

