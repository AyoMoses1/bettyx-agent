import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';


const InboxView = () => {
  return (
    <Box px={6} sx={{borderBottom: '2px solid #dfdfdf'}} paddingBottom={8}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text textTransform="uppercase">
          My inbox Messages
        </Text>
        <Button variant="outline" size={['sm', 'md']}>
          Delete messages
        </Button>
      </Flex>
    </Box>
  );
};

export default InboxView;
