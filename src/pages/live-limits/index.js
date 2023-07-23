import { Box, Container } from '@chakra-ui/react';
import Bar from './components/Bar';
import Form from './components/Form';
import React from 'react';

const index = () => {
  return (
    <Container maxW="98%">
      <Bar />
      <Form />
    </Container>
  );
};

export default index;

