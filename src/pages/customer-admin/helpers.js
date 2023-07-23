import { FaTimes } from 'react-icons/fa';
import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor('agent', {
    header: 'Agent',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('password', {
    header: 'Password',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('creditLimit', {
    header: 'Credit Limit',
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor('wagerLimit', {
    header: 'Wager Limit',
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor('balance', {
    header: 'Balance',
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor('pMaxBet', {
    header: 'P. Max Bet',
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor('tMaxBet', {
    header: 'T. Max Bet',
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('sportsBook', {
    header: 'Sports Book',
    cell: (info) => (
      <Box sx={{ width: '20px', height: '20px', bgColor: 'green' }}></Box>
    ),
  }),
  columnHelper.accessor('horses', {
    header: 'Horses',
    cell: (info) => (
      <Box sx={{ width: '20px', height: '20px', bgColor: 'green' }}></Box>
    ),
  }),
  columnHelper.accessor('casino', {
    header: 'Status',
    cell: (info) => (
      <Box sx={{ width: '20px', height: '20px', bgColor: 'green' }}></Box>
    ),
  }),
  columnHelper.accessor('action', {
    header: '',
    cell: () => (
      <Button bgColor="blue" color="white">
        Edit
      </Button>
    ),
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

export const selectDates = [
  {
    value: 'today',
    name: 'Today',
  },
  {
    value: '3',
    name: '3 days',
  },
  {
    value: '7',
    name: '7 days',
  },
  {
    value: '14',
    name: '14 days',
  },
];

export const selectTypes = [
  {
    value: 'all',
    name: 'All Types',
  },
  {
    value: 'straight',
    name: 'Straight',
  },
  {
    value: 'parlay',
    name: 'Parlay',
  },
  {
    value: 'bets',
    name: 'If Bets',
  },
  {
    value: 'teaser',
    name: 'Teaser',
  },
  {
    value: 'racebook',
    name: 'Racebook',
  },
  {
    value: 'contest',
    name: 'Contest',
  },
  {
    value: 'manual',
    name: 'Manual Plays',
  },
  {
    value: 'live',
    name: 'Live/Props',
  },
];

export const selectAmount = [
  {
    value: 'any',
    name: 'Any Amount',
  },
  {
    value: 100,
    name: '$100+',
  },
  {
    value: 500,
    name: '$500+',
  },
  {
    value: 1000,
    name: '$1000+',
  },
];
