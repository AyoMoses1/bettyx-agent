import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  List,
  ListItem,
  Text,
  Select,
  Switch,
  FormLabel,
  FormControl,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { data as results } from './components/helpers';
import Table from './components/Table';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowResults(value.length > 0);
  };

  const handleResultClick = (result) => {
    setSearchTerm(result);
    setShowResults(false);
  };

  const handleSearch = () => {
    setShowTable(true);
  };

  const inputWidth = useBreakpointValue({ base: '100%', md: '300px' });

  return (
    <>
      <Flex align="center" bg="grey" m={4} p={4} gap={4} flexWrap="wrap">
        <Box width={inputWidth}>
          <InputGroup>
            <StyledInputLeftAddon children="Agents" />
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
                    <Text>
                      {result.name} <span>({result.caption})</span>
                    </Text>
                  </ListItem>
                ))}
            </List>
          )}
        </Box>
        <Box width={inputWidth}>
          <InputGroup>
            <StyledInputLeftAddon children="Players" />
            <Input
              type="tel"
              placeholder="Search Accounts..."
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setShowResults(searchTerm.length > 0)}
              onBlur={() => setShowResults(false)}
            />
          </InputGroup>
        </Box>
        <Box width={inputWidth}>
          <Select defaultValue="today">
            <option value="today">Today</option>
            <option value="7">7 days</option>
            <option value="30">30 days</option>
            <option value="90">90 days</option>
          </Select>
        </Box>
        <Box width={inputWidth}>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="switch" mr={2}>
              Show Buyouts
            </FormLabel>
            <Switch
              id="switch"
              colorScheme="red"
              size="lg"
              offTrackColor="red"
              onTrackColor="green"
            />
          </FormControl>
        </Box>
        <Box p={4} bg="orange" borderRadius="50%" ml={12}>
          <FaSearch color="white" size={20} onClick={handleSearch} />
        </Box>
      </Flex>
      {showTable && <Table />}
    </>
  );
};

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0;
  border-radius: 0px !important;
`;

export default Index;
