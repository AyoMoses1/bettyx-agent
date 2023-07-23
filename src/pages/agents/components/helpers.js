import { Box, Center, Icon, Text, Button } from '@chakra-ui/react';
import { createColumnHelper } from '@tanstack/react-table';
import { FaShare } from 'react-icons/fa';
const columnHelper = createColumnHelper();

export const agentColumns = (onTransaction) => {
  return [
    columnHelper.accessor('agent', {
      header: 'Agents',
      cell: (info) => <Text variant="normalBold">{info.getValue()}</Text>,
    }),
    columnHelper.accessor('password', {
      header: 'Password',
      cell: (info) => <Text variant="tableText">{info.getValue()}</Text>,
    }),
    columnHelper.accessor('balance', {
      header: 'Balance',
      cell: (info) => (
        <Text
          variant="tableText"
          textDecoration="underline"
          cursor="pointer"
          onClick={() => onTransaction()}
        >{`$${info.getValue()}`}</Text>
      ),
    }),
    columnHelper.accessor('settle', {
      header: 'Settle',
      cell: (info) => <Text variant="tableText">{`$${info.getValue()}`}</Text>,
    }),
    columnHelper.accessor('lastWeek', {
      header: 'Last Week',
      cell: (info) => <Text variant="tableText">{info.getValue()}</Text>,
    }),
    columnHelper.accessor('lastTransaction', {
      header: 'Last Transactions',
      cell: (info) => <Text variant="tableText">{info.getValue()}</Text>,
    }),
    columnHelper.accessor((row) => row.status, {
      header: 'Actions',
      cell: (info) => (
        <Box>
          <Button bg="primary">
            <Icon as={FaShare} size={20} color="white" />
          </Button>
        </Box>
      ),
    }),
  ];
};
