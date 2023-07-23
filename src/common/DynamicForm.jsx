import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  FormHelperText,
  InputLeftAddon,
  InputGroup,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';
import DateRangePicker from './DateRange';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';

const generateInputs = (inputObj) => {
  if (
    inputObj.type === 'email' ||
    inputObj.type === 'text' ||
    inputObj.type === 'phone' ||
    inputObj.type === 'number' ||
    inputObj.type === 'date'
  ) {
    return (
      <FormControl isInvalid={inputObj.isInvalid} mb={3} key={inputObj.name}>
        <FormLabel htmlFor={inputObj.name} mb={0}>
          {inputObj.label}
        </FormLabel>
        <InputGroup maxW={["300px","400px"]} ml={inputObj.float ? 'auto' : ''}>
          <StyledInputLeftAddon children={inputObj.name} display={['none', 'block']}/>
          <Input
            id={inputObj.name}
            type={inputObj.type}
            {...inputObj.register}
            size={['sm' , `${inputObj.size ?? 'md'}`]}
            placeholder={inputObj?.placeholder}
            onChange={inputObj?.onChange}
            defaultValue={inputObj?.defaultValue}
            disabled={inputObj?.disabled}
            key={inputObj.type}
          />

          {inputObj.buttons?.map((button) => {
            return button.asButton ? (
              <Button variant="primary" ml={4}>
                {button.icon}
              </Button>
            ) : (
              button.icon
            );
          })}
        </InputGroup>
        {/* <Input
          id={inputObj.name}
          type={inputObj.type}
          {...inputObj.register}
          size={inputObj.size ?? 'md'}
          placeholder={inputObj?.placeholder}
          onChange={inputObj?.onChange}
          defaultValue={inputObj?.defaultValue}
          disabled={inputObj?.disabled}
          key={inputObj.type}
        /> */}
        {inputObj.error && (
          <FormErrorMessage>{inputObj.error.message}</FormErrorMessage>
        )}
        {inputObj.helperMessage && (
          <FormHelperText>{inputObj.helperMessage}</FormHelperText>
        )}
      </FormControl>
    );
  } else if (
    inputObj.type === 'select' &&
    inputObj.variant !== 'outline-select'
  ) {
    return (
      <FormControl isInvalid={inputObj.isInvalid} mb={4} key={inputObj.name}>
        <FormLabel mb={0} htmlFor={inputObj.name}>
          {inputObj.label}
        </FormLabel>
        <Select
          id={inputObj.name}
          size={inputObj.size ?? 'md'}
          {...inputObj.register}
          focusBorderColor="primary"
          onChange={inputObj?.onChange}
          disabled={inputObj?.disabled}
          defaultValue={inputObj?.defaultValue}
          width={inputObj?.width}
          ml={inputObj.float ? 'auto' : ''}
        >
          {inputObj?.options?.map((item) => {
            return (
              <option
                value={item.value}
                key={item.name}
                style={{ color: '#000' }}
              >
                {item.name}
              </option>
            );
          })}
        </Select>
        {inputObj.error && (
          <FormErrorMessage>{inputObj.error.message}</FormErrorMessage>
        )}
      </FormControl>
    );
  } else if (
    inputObj.type === 'select' &&
    inputObj.variant === 'outline-select'
  ) {
    return (
      <FormControl isInvalid={inputObj.isInvalid} mb={4} key={inputObj.name}>
        <Box display="inline-block" position="relative">
          <Select
            placeholder={inputObj.icon ? inputObj.icon : inputObj.label}
            borderBottom="none"
            icon={inputObj.icon}
            borderTop={inputObj.icon ? '1px solid black' : 'none'}
            border="none"
            id={inputObj.name}
            size={inputObj.size ?? 'md'}
            {...inputObj.register}
            focusBorderColor="primary"
            onChange={inputObj?.onChange}
            disabled={inputObj?.disabled}
            defaultValue={inputObj?.defaultValue}
            width={inputObj?.width}
            ml={inputObj.float ? 'auto' : ''}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          >
            {inputObj?.options?.map((item) => {
              return (
                <option
                  value={item.value}
                  key={item.name}
                  style={{ color: '#000' }}
                >
                  {item.name}
                </option>
              );
            })}
          </Select>
          {inputObj.error && (
            <FormErrorMessage>{inputObj.error.message}</FormErrorMessage>
          )}
          <Box
            position="absolute"
            top="50%"
            right="0"
            transform="translateY(-50%)"
            pointerEvents="none"
          ></Box>
        </Box>
      </FormControl>
    );
  } else if (inputObj.type === 'dateRange') {
    return (
      <DateRangePicker
        onChange={(dateRange) => {
          if (inputObj.onChange) {
            inputObj?.onChange(dateRange);
          }
        }}
      />
    );
  }
};

export default generateInputs;

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0;
  border-radius: 0px !important;
`;
