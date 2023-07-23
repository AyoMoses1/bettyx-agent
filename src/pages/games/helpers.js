import { FaTimes } from 'react-icons/fa';
import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor('score', {
    header: 'SCORE',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('spread', {
    header: 'SPREAD',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('moneyline', {
    header: 'MONEYLINE',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('total', {
    header: 'TOTAL',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('teamtotals', {
    header: 'TEAM TOTALS',
    cell: (info) => {
      const value = info.getValue();
      const textColor = 'green';
      return <span style={{ color: textColor }}>${value}</span>;
    },
  }),
  columnHelper.accessor('action', {
    header: '',
    cell: (info) => {
      return <FaTimes color="red" />;
    },
  }),
];

export const selectDates = [
  {
    value: 'yesterday',
    name: 'Yesterday',
  },
  {
    value: 'today',
    name: 'Today',
  },
  {
    value: 'full',
    name: 'Full Board',
  },
];

export const selectGames = [
  {
    value: 'active',
    name: 'Active',
  },
  {
    value: 'offBoard',
    name: 'Game off The Board',
  },
  {
    value: 'graded',
    name: 'Graded',
  },
];

export const selectGrades = [
  {
    value: 'master',
    name: 'Master',
  },
  {
    value: 'pphinsider',
    name: 'PPHINSIDER',
  },
];

export const selectUsers = [
  {
    value: 'admin',
    name: 'Admin',
  },
  {
    value: 'position',
    name: 'Position',
  },
];

export const selectBaseball = [
  {
    value: 'mlb',
    name: 'MLB',
  },
  {
    value: 'series',
    name: 'MLB Series Prices',
  },
  {
    value: 'other',
    name: 'Other Baseball',
  },
];

export const selectCards = [
  {
    value: '',
    name: 'R Villa vs J Ennis - Card',
  },
  {
    value: 'card2',
    name: 'A Johnson vs K Thompson',
  },
  {
    value: 'card3',
    name: 'S Rodriguez vs M Davis',
  },
  {
    value: 'card4',
    name: 'L Hernandez vs B Wilson',
  },
  {
    value: 'card5',
    name: 'D Garcia vs C Anderson',
  },
];

export const selectNfl = [
  {
    value: '',
    name: 'NFL',
  },
  {
    value: '',
    name: 'NFL Regular Season wins',
  },
  {
    value: '',
    name: 'NFL to make the playoffs',
  },
  {
    value: '',
    name: 'NFL Season Specials',
  },
  {
    value: '',
    name: 'College Football',
  },
  {
    value: '',
    name: 'Canadian Football',
  },
];

export const selectMatchUps = [
  {
    value: '',
    name: 'ATP Matchups',
  },
  {
    value: '',
    name: 'WTA Matchups',
  },
];
