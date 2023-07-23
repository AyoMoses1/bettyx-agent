import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Flex,
  Button,
  InputGroup,
  InputLeftAddon,
  Switch,
} from '@chakra-ui/react';
import styled from 'styled-components';

const NewCustomer = () => {
  return (
    <Box m={4} bg="#ececec">
      <Flex justify="space-between" bg="blue" align="center" px={4}>
        <Heading variant="h1" color="#fff">
          Add Player
        </Heading>
        <Button variant="success" px={4} my={2} size={['sm','md']}>
          Continue
        </Button>
      </Flex>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" p={8} gap={4}>
        <GridItem>
          <FormControl>
            <FormLabel>How many accounts to add?</FormLabel>
            <Input type="number" />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Under which agent?</FormLabel>
            <InputGroup>
              <StyledInputLeftAddon children="Find" border="1px" />
              <Input type="tel" placeholder="Search Accounts..." />
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Starting Account # </FormLabel>
            <Input type="number" />
          </FormControl>
        </GridItem>
        <GridItem alignSelf="center" mt={8}>
          <FormControl display="flex" alignItems="center">
            <Switch
              id="switch"
              colorScheme="whatsapp"
              size="md"
              mr={2}
            />
            <FormLabel htmlFor="switch" mr={2}>
              Generate random password (ex: A7B3)
            </FormLabel>
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default NewCustomer;

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0 !important;
  border-radius: 0px !important;
`;
