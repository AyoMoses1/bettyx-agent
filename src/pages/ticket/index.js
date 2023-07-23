import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Spacer,
  InputGroup,
  InputLeftAddon,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { data as results } from './components/helpers';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowResults(value.length > 0);
  };

  const handleResultClick = (result) => {
    setSearchTerm(result);
    setShowResults(false);
  };

  return (
    <Flex align="center" bg="grey" m={4} p={4}>
      <Box flex="1">
        <InputGroup>
          <StyledInputLeftAddon children="Place Wager for" />
          <Input
            type="tel"
            placeholder="Search Accounts..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowResults(searchTerm.length > 0)}
            onBlur={() => setShowResults(false)}
          />
        </InputGroup>
        {showResults && (
          <List
            position="absolute"
            width="40%"
            backgroundColor="white"
            borderRadius="md"
            boxShadow="md"
            mt={2}
          >
            {results
              .filter((result) =>
                result.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((result, index) => (
                <ListItem
                  key={result.name}
                  cursor="pointer"
                  px={4}
                  py={2}
                  _hover={{ background: 'gray.100' }}
                  bg={index % 2 === 0 ? 'white' : 'gray.200'}
                  onClick={() => handleResultClick(result)}
                >
                  <Text>{result.name} <span>({result.caption})</span></Text>
                </ListItem>
              ))}
          </List>
        )}
      </Box>
      <Spacer />
    </Flex>
  );
};

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0;
  border-radius: 0px !important;
`;

export default Index;
