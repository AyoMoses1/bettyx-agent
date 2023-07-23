import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Bar from './Components/Bar';
import Form from './Components/Form';

function index() {
  return (
    <Container maxW="98%">
      <Bar />
      <Form />
    </Container>
  );
}

export default index;
