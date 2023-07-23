import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Divider,
} from '@chakra-ui/react';
import styled from 'styled-components';

const NewTransaction = ({ onClose, onSubmit }) => {
  return (
    <form>
      <FormControl marginBottom="20px">
        <FormLabel>Transaction</FormLabel>
        <StyledSelect defaultValue="Deposits">
          <option value="Deposits">Deposits</option>
          <option value="Withdrawals">Withdrawals</option>
          <option value="Deposits">Credit Adj</option>
          <option value="Withdrawals">Debit Adj</option>
          <option value="Deposits">Promotional Credit</option>
          <option value="Deposits">Promotional Debit</option>
        </StyledSelect>
      </FormControl>

      <FormControl marginBottom="20px">
        <FormLabel>Date</FormLabel>
        <StyledInput type="date" borderBottomWidth="1px" />
      </FormControl>

      <FormControl marginBottom="20px">
        <FormLabel>Amount</FormLabel>
        <StyledInput type="number" />
      </FormControl>

      <FormControl marginBottom="20px">
        <FormLabel>Description</FormLabel>
        <StyledInput />
      </FormControl>
      <HStack justifyContent="space-between" marginTop="20px">
        <Button variant="cancel" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={onSubmit}>
          Continue
        </Button>
      </HStack>
    </form>
  );
};

const StyledInput = styled(Input)`
  border: none;
  border-bottom: 1px solid #cbd5e0;
  border-radius: 0;
`;

const StyledSelect = styled(Select)`
  border: none;
  border-bottom: 1px solid #cbd5e0;
  border-radius: 0;
`;

export default NewTransaction;
