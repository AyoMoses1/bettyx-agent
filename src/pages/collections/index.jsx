import React from 'react';
import {
  Box,
  Flex,
  Input,
  IconButton,
  Select,
  Spacer,
  Switch,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { FaPrint } from 'react-icons/fa';

const index = () => {
  return (
    <Flex align="center" bg="gray.200" p={2}>
      <Box flex="1">
        <InputGroup>
          <InputLeftAddon children="Agents" border="1px"/>
          <Input type="tel" placeholder="Search Accounts..." />
        </InputGroup>
      </Box>
      <Box mx={2}>
        <Select placeholder="Settings">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box>
        <Switch size="lg" colorScheme="teal" />
      </Box>
      <Spacer />
      <Box>
        <IconButton aria-label="Print" icon={<FaPrint />} colorScheme="teal" />
      </Box>
    </Flex>
  );
};

export default index;
