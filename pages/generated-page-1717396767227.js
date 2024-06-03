
import React from 'react';
import { ChakraProvider, Box, Heading, Text, Button } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';


const MyComponent = () => {
  return (
    <ChakraProvider>
      <Box className="p-4 bg-gray-50 rounded shadow-md">
        <Heading className="text-xl font-bold mb-4">
          Component Title
        </Heading>
        <Text className="mb-4">
          This is a sample component based on the provided SRS.
        </Text>
        <Button colorScheme="teal" className="w-full">
          Click Me
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default MyComponent;

