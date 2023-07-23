import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Select,
} from '@chakra-ui/react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
const columnHelper = createColumnHelper();

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0;
  border-radius: 0px !important;
`;

export const transactionOptions = [
  {
    value: 'deposit',
    name: 'Deposit',
  },
  {
    value: 'withdraw',
    name: 'Withdraw',
  },
  {
    value: 'credit',
    name: 'Credit Adj',
  },
  {
    value: 'debit',
    name: 'Debit Adj',
  },
  {
    value: 'fpDeposit',
    name: 'FP Deposit',
  },
];

export const columns = [
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: (info) => (
      <InputGroup maxW="400px">
        <StyledInputLeftAddon children="Find" />
        <Input type="text" size="md" placeholder="Search..." />
      </InputGroup>
    ),
  }),
  columnHelper.accessor('settle', {
    header: 'Settle',
    cell: (info) => '--',
  }),
  columnHelper.accessor('balance', {
    header: 'Balance',
    cell: (info) => '--',
  }),
  columnHelper.accessor('transaction', {
    header: 'Transaction',
    cell: (info) => (
      <Select size="md">
        {transactionOptions?.map((item) => {
          return (
            <option value={item.value} key={item.name}>
              {item.name}
            </option>
          );
        })}
      </Select>
    ),
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => (
      <Flex>
        <InputGroup maxW="200px">
          <Input type="text" size="md" placeholder="Amount" />
        </InputGroup>
        <Button variant="primary" ml={2} width="100px" height="50px">
          Zero
        </Button>
      </Flex>
    ),
  }),
  columnHelper.accessor('figureDate', {
    header: 'Figure Date',
    cell: (info) => (
      <InputGroup maxW="200px">
        <Input type="text" size="md" value="07/04/2023" />
      </InputGroup>
    ),
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) => (
      <InputGroup maxW="200px">
        <Input type="text" size="md" placeholder="Customer Deposit" />
      </InputGroup>
    ),
  }),
  columnHelper.accessor('action', {
    header: (
      <Button bgColor="green" color="white" size="sm">
        Continue
      </Button>
    ),
    cell: (info) => '',
  }),
];

export const data = [
  {
    agent: 'AMICHI1123',
    password: 'Gryboski24',
    creditLimit: 500,
    wagerLimit: 1000,
    balance: 0,
    pMaxBet: 0,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'XYZ7890',
    password: 'Smith2023',
    creditLimit: 1000,
    wagerLimit: 2000,
    balance: 250,
    pMaxBet: 100,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'QWE1234',
    password: 'Johnson777',
    creditLimit: 750,
    wagerLimit: 1500,
    balance: 500,
    pMaxBet: 200,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'ABC5678',
    password: 'Thompson123',
    creditLimit: 1000,
    wagerLimit: 2000,
    balance: 1250,
    pMaxBet: 500,
    tMaxBet: 0,
    status: 'Disabled',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'DEF1234',
    password: 'Davis2023',
    creditLimit: 800,
    wagerLimit: 1600,
    balance: 750,
    pMaxBet: 250,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'GHI5678',
    password: 'Harris456',
    creditLimit: 1200,
    wagerLimit: 2400,
    balance: 1800,
    pMaxBet: 700,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'JKL9012',
    password: 'Clark888',
    creditLimit: 900,
    wagerLimit: 1800,
    balance: 1500,
    pMaxBet: 600,
    tMaxBet: 0,
    status: 'Disabled',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'MNO3456',
    password: 'Adams555',
    creditLimit: 600,
    wagerLimit: 1200,
    balance: 900,
    pMaxBet: 400,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'PQR7890',
    password: 'Walker2023',
    creditLimit: 1100,
    wagerLimit: 2200,
    balance: 1600,
    pMaxBet: 650,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
  {
    agent: 'STU2345',
    password: 'Brown777',
    creditLimit: 700,
    wagerLimit: 1400,
    balance: 1050,
    pMaxBet: 450,
    tMaxBet: 0,
    status: 'Active',
    sportsBook: '',
    casino: '',
    horses: '',
  },
];

export const selectMode = [
  {
    value: 'manual',
    name: 'Manual Mode',
  },
  {
    value: 'agent',
    name: 'Agent Mode',
  },
];
