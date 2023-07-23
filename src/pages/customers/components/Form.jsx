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
  Text,
  Divider,
  Textarea,
} from '@chakra-ui/react';
import {
  caption,
  formData,
  formDataTwo,
  formSwitch,
  formSwitchTwo,
} from '../helpers';
import styled from 'styled-components';
import { useState } from 'react';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box margin="auto" mt={1}>
      <form>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} py={8}>
          <GridItem colSpan={[3, 1]} bg="white" p={4}>
            {formData.map((item) => (
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
            ))}
            {formSwitch.map((item) => (
              <Box mb={2}>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormLabel htmlFor="switch" mb={0} mr={2}>
                    {item.label}
                  </FormLabel>
                  <Switch
                    id="switch"
                    defaultChecked={item.isChecked}
                    colorScheme="whatsapp"
                  />
                </FormControl>
              </Box>
            ))}
          </GridItem>
          <GridItem colSpan={[3, 1]} bg="white" p={4}>
            {formDataTwo.map((item) => (
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
            ))}
          </GridItem>
          <GridItem colSpan={[3, 1]} bg="white" p={4}>
            <Text variant="cardText">Confirmation Delay</Text>
            <Divider />
            {formSwitchTwo.map((item) => (
              <Box mb={2}>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormLabel htmlFor="switch" mb={0} mr={2}>
                    {item.label}
                  </FormLabel>
                  <Switch
                    id="switch"
                    defaultChecked={item.isChecked}
                    colorScheme="whatsapp"
                  />
                </FormControl>
              </Box>
            ))}
            <Textarea
              variant="unstyled"
              borderBottom="1px solid gray"
              _focus={{ borderBottomColor: 'turquoise' }}
              placeholder="Player notes"
              size="md"
            />
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default MyForm;
