import React from 'react';
import NavBar from './NavBar';
import { Box } from '@chakra-ui/react';

const Layout = ({children}) => {
  return (
    <Box height="100%">
      <NavBar/>
      {children}
    </Box>
  );
};

export default Layout;
