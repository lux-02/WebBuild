
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Input, SimpleGrid, Image, Text, VStack, Button } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const PortfolioComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const portfolioItems = [
    { id: 1, title: '작품 1', description: '이것은 첫 번째 작품입니다.', image: '/path/to/image1.jpg' },
    { id: 2, title: '작품 2', description: '이것은 두 번째 작품입니다.', image: '/path/to/image2.jpg' },
    { id: 3, title: '작품 3', description: '이것은 세 번째 작품입니다.', image: '/path/to/image3.jpg' }
  ];

  const filteredItems = portfolioItems.filter(
    item => item.title.includes(searchTerm) || item.description.includes(searchTerm)
  );

  return (
    <Box className="min-h-screen p-4 bg-gray-100">
      <VStack spacing={4} className="w-full max-w-xl mx-auto">
        <Input 
          placeholder="검색" 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)} 
          className="mb-4"
        />
        <SimpleGrid columns={[1, 2, 3]} spacing={10} w="full">
          {filteredItems.map(item => (
            <Box key={item.id} className="bg-white p-4 shadow-md rounded">
              <Image src={item.image} alt={item.title} className="mb-4 rounded" />
              <Text className="font-semibold text-lg">{item.title}</Text>
              <Text className="text-gray-600">{item.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default function Page() {
  return (
    <ChakraProvider>
      <PortfolioComponent />
    </ChakraProvider>
  );
}

