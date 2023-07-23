import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Switch,
  Text,
} from '@chakra-ui/react';
import styled from 'styled-components';

const EditForm = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={8} px={[0,4]}>
      <GridItem colSpan={[3, 1]} bg="grey" p={4}>
        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Password</FormLabel>
            <Input width="200px" type="password" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Name</FormLabel>
            <Input width="200px" type="text" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Credit Limit</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Wager Limit</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Settle Figure</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Balance</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>
      </GridItem>
      <GridItem colSpan={[3, 1]} bg="grey" p={4}>
        <HStack mb={4} align="center">
          <Text variant="cardText" color="#000">
            Pending
          </Text>
          <Text variant="cardText" color="#000">
            $0
          </Text>
        </HStack>
        <HStack>
          <Text>Available</Text>
          <Text>$500</Text>
        </HStack>
        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Parlay Max Wager</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Parlay Max Payout :</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Teaser Max Wager :</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>
        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Status :</FormLabel>
            <Select width="200px">
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
              <option value="read-only">Read Only</option>
            </Select>
          </Flex>
        </StyledFormControl>
      </GridItem>
      <GridItem colSpan={[3, 1]} bg="grey" p={4}>
      {/* <Button variant="primary" ml="auto">Save</Button> */}
        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Parlay Max Wager</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Parlay Max Payout :</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl mb={4}>
          <Flex mb={4} align="center">
            <FormLabel flex="1">Teaser Max Wager :</FormLabel>
            <Input width="200px" type="number" />
          </Flex>
        </StyledFormControl>

        <StyledFormControl display="flex" alignItems="center" mb={4} pb={4}>
          <FormLabel htmlFor="switch" mb={0} mr={2}>
            Sportbook
          </FormLabel>
          <Switch
            id="switch"
            defaultChecked
            colorScheme="whatsapp"
            size="lg"
            ml={8}
          />
        </StyledFormControl>
        <StyledFormControl display="flex" alignItems="center" mb={4} pb={4}>
          <FormLabel htmlFor="switch" mb={0} mr={2}>
            Casino
          </FormLabel>
          <Switch
            id="switch"
            defaultChecked
            colorScheme="whatsapp"
            size="lg"
            ml={8}
          />
        </StyledFormControl>
        <StyledFormControl display="flex" alignItems="center" mb={4} pb={4}>
          <FormLabel htmlFor="switch" mb={0} mr={2}>
            Horses
          </FormLabel>
          <Switch
            id="switch"
            defaultChecked
            colorScheme="whatsapp"
            size="lg"
            ml={8}
          />
        </StyledFormControl>
      </GridItem>
    </Grid>
  );
};

export default EditForm;

const StyledFormControl = styled(FormControl)`
  border-bottom: 2px solid #bdbdbd;
`;
