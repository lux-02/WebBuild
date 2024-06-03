
import React from 'react';
import { Box, Text, Grid, GridItem, Input, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const BlogHomepage = () => {
  return (
    <Box className="min-h-screen bg-gray-100 p-8">
      <Box className="max-w-7xl mx-auto">
        <Box className="flex justify-between items-center mb-8">
          <Text className="text-4xl font-bold">블로그</Text>
          <Box className="flex items-center">
            <Input 
              placeholder="검색..." 
              className="border-gray-300 focus:border-blue-500" 
              width="300px" 
              mr="2"
            />
            <Button className="bg-blue-500 text-white">
              <SearchIcon />
            </Button>
          </Box>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <Box className="bg-white p-4 rounded-lg shadow-md">
              <Text className="font-bold text-xl mb-2">Article Title</Text>
              <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box className="bg-white p-4 rounded-lg shadow-md">
              <Text className="font-bold text-xl mb-2">Article Title</Text>
              <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box className="bg-white p-4 rounded-lg shadow-md">
              <Text className="font-bold text-xl mb-2">Article Title</Text>
              <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogHomepage;

