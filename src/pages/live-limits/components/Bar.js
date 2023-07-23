import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Bar = () => {
  return (
    <Box bg="blue" mt={4} px={4} py={2}>
      <Flex align="center" justify="space-between">
        <Box>
          <HStack>
            <Heading variant="h1" color="#fff"> Dynamic Live </Heading>
          </HStack>
        </Box>
        <Box>
          <Button variant="primary" size={['sm', 'md']}>Save</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Bar;
