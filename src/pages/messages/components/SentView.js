import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';


const SentView = () => {
  return (
    <Box px={6} sx={{borderBottom: '2px solid #dfdfdf'}} paddingBottom={8}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text textTransform="uppercase">
          My Sent Messages
        </Text>
        <Button variant="outline" size={['sm', 'md']}>
          Delete messages
        </Button>
      </Flex>
    </Box>
  );
};

export default SentView;
