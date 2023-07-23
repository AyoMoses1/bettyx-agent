import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

const Bar = () => {
  return (
    <Box bg="blue" mt={4} px={4} py={2}>
      <Flex align="center" justify="space-between">
        <Box>
          <HStack>
            <AiOutlineSetting size={24} color="#fff" />
            <Heading variant="h1" color="#fff">
              {' '}
              My Settings{' '}
            </Heading>
          </HStack>
        </Box>
        <Box>
          <Button variant="primary" size={['sm', 'md']}>
            Save
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Bar;
