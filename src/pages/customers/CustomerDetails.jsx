import { Box, Container } from '@chakra-ui/react';
import Bar from './components/Bar';
import Form from './components/Form';
import React from 'react';

const CustomerDetails = () => {
  return (
    <Container maxW="100%" bg="gray3">
      <Bar />
      <Form />
    </Container>
  );
};

export default CustomerDetails;