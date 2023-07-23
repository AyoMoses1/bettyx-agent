import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Input,
  Flex,
  Switch,
  InputLeftAddon,
  InputGroup,
} from '@chakra-ui/react';
import { caption, formData, formSwitch } from './helpers';
import styled from 'styled-components';
import { useState } from 'react';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box margin="auto" p={8} bg="blue" color="white" mt={1}>
      <StyledBox mb={8} p={[2, 4]}>
        {caption}
      </StyledBox>
      <Box px={[2, 8]}>
        <Select
          variant="unstyled"
          border="none"
          value={selectedOption}
          _focus={{ borderBottomColor: 'turquoise' }}
          size="sm"
          width="200px"
          onChange={handleSelectChange}
        >
          <option value="option1" style={{ color: 'black' }}>
            Sport/Leagues Offerings
          </option>
          <option value="option2" style={{ color: 'black' }}>
            Wagering Limits
          </option>
        </Select>
      </Box>
      {selectedOption === 'option1' ? (
        <Grid templateColumns="repeat(4, 1fr)"  px={[2, 8]} gap={4}>
          <GridItem colSpan={[4, 1]}>
            <FormControl>
              <FormLabel>How many accounts to add?</FormLabel>
              <Input type="number" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4, 1]}>
            <FormControl>
              <FormLabel>Under which agent?</FormLabel>
              <InputGroup>
                <StyledInputLeftAddon children="Find" border="1px" />
                <Input type="tel" placeholder="Search Accounts..." />
              </InputGroup>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4, 1]}>
            <FormControl>
              <FormLabel>Starting Account # </FormLabel>
              <Input type="number" />
            </FormControl>
          </GridItem>
          <GridItem alignSelf="center" mt={8} colSpan={[4, 1]}>
            <FormControl display="flex" alignItems="center">
              <Switch id="switch" colorScheme="whatsapp" size="md" mr={2} />
              <FormLabel htmlFor="switch" mr={2}>
                Generate random password (ex: A7B3)
              </FormLabel>
            </FormControl>
          </GridItem>
        </Grid>
      ) : (
        <form>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} p={[2, 8]}>
            <GridItem colSpan={[4, 3]}>
              <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                {formData.map((item) => (
                  <GridItem colSpan={[2, 1]}>
                    <FormControl mb={3} key={item.name}>
                      <FormLabel htmlFor={item.name} mb={0}>
                        {item.label}
                      </FormLabel>
                      <Input
                        value={item.value}
                        variant="unstyled"
                        border="none"
                        borderBottom="1px solid gray"
                        _focus={{ borderBottomColor: 'turquoise' }}
                        placeholder="Here is a sample placeholder"
                        size="sm"
                      />
                    </FormControl>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
            <GridItem colSpan={[4, 1]} justifySelf={["start","end"]}>
              {formSwitch.map((item) => (
                <Box mb={8}>
                  <FormControl display="flex" alignItems="center" >
                    <FormLabel htmlFor="switch" mb={0} mr={2}>
                      {item.label}
                    </FormLabel>
                    <Flex alignItems="center">
                      <Switch
                        id="switch"
                        defaultChecked={item.isChecked}
                        colorScheme="whatsapp"
                      />
                    </Flex>
                  </FormControl>
                </Box>
              ))}
            </GridItem>
          </Grid>
        </form>
      )}
    </Box>
  );
};

export default MyForm;

const StyledBox = styled(Box)`
  color: red;
  text-align: center;
  border: 2px solid red;
  font-style: italic;
`;

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0 !important;
  border-radius: 0px !important;
`;
