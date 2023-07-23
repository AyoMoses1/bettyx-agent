import { createColumnHelper } from '@tanstack/react-table';
import { FiMoreVertical } from 'react-icons/fi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Button,
  Text,
  Tag,
} from '@chakra-ui/react';

const columnHelper = createColumnHelper();

const statusTypes = [
  { name: 'SUCCESS', color: 'green' },
  { name: 'SUCCESSFUL', color: 'green' },
  { name: 'APPROVED', color: 'green' },
  { name: 'PAID', color: 'green' },
  { name: 'COMPLETED', color: 'green' },
  { name: 'ERROR', color: 'red' },
  { name: 'CANCELLED', color: 'red' },
  { name: 'WARNING', color: 'yellow' },
  { name: 'PROCESSING', color: 'blue' },
  { name: 'ON_HOLD', color: 'cyan' },
  { name: 'PENDING', color: 'cyan' },
];

const getStatusTag = (name) => {
  let color;
  statusTypes.forEach((status) => {
    if (status.name === name) {
      color = (
        <Tag variant="solid" colorScheme={status.color}>
          {status.name}
        </Tag>
      );
    }
  });
  return color;
};

export const transactionColumns = [
  columnHelper.accessor('reference', {
    header: 'Transaction Ref.',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('receiverBank', {
    header: 'Benficiary Bank',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('receiverAccountNumber', {
    header: 'Account Number',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => getStatusTag(info.getValue()),
  }),
  columnHelper.accessor((row) => row.id, {
    header: 'Actions',
    cell: (info) => (
      <Menu>
        <MenuButton variant="noBg" p={0} as={Button}>
          <Center>
            <FiMoreVertical />
          </Center>
        </MenuButton>

        <MenuList>
          <MenuItem>View Detail</MenuItem>
        </MenuList>
      </Menu>
    ),
  }),
];

export const earningColumns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('orderId', {
    header: 'Order ID',
    cell: (info) => {
      if (typeof info.getValue() === 'string') return '';
      return info.getValue()?.referenceNo;
    },
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('transactionTime', {
    header: 'Date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => getStatusTag(info.getValue()),
  }),
  columnHelper.accessor((row) => row.id, {
    header: 'Actions',
    cell: (info) => (
      <Menu>
        <MenuButton variant="noBg" p={0} as={Button}>
          <Center>
            <FiMoreVertical />
          </Center>
        </MenuButton>

        <MenuList>
          <MenuItem>View Detail</MenuItem>
        </MenuList>
      </Menu>
    ),
  }),
];

export const refundColumns = [
  columnHelper.accessor('orderId', {
    header: 'Order ID',
    cell: (info) => {
      if (typeof info.getValue() === 'object') return '';
      return info.getValue();
    },
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('reason', {
    header: 'Reason',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => getStatusTag(info.getValue()),
  }),
  columnHelper.accessor('requestedBy', {
    header: 'Requested By',
    cell: (info) =>
      `${info.getValue()?.firstName} ${info.getValue()?.lastName}`,
  }),
  columnHelper.accessor('approvedBy', {
    header: 'Status',
    cell: (info) =>
      `${info.getValue()?.firstName} ${info.getValue()?.lastName}`,
  }),
  columnHelper.accessor((row) => row.id, {
    header: 'Actions',
    cell: (info) => (
      <Menu>
        <MenuButton variant="noBg" p={0} as={Button}>
          <Center>
            <FiMoreVertical />
          </Center>
        </MenuButton>

        <MenuList>
          <MenuItem>View Detail</MenuItem>
        </MenuList>
      </Menu>
    ),
  }),
];

export const summaryColumns = [
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('password', {
    header: 'Password',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('carry', {
    header: 'Carry',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('monday', {
    header: 'Monday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('tuesday', {
    header: 'Tuesday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('wednesday', {
    header: 'Wednesday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('thursday', {
    header: 'Thursday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('friday', {
    header: 'Friday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('saturday', {
    header: 'Saturday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('sunday', {
    header: 'Sunday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('week', {
    header: 'Sunday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('pending', {
    header: 'Sunday',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('balance', {
    header: 'Sunday',
    cell: (info) => info.getValue(),
  }),
];

export const orderColumns = [
  columnHelper.accessor('referenceNo', {
    header: 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('customerId', {
    header: 'Customer',
    cell: (info) =>
      `${info.getValue()?.firstName} ${info.getValue()?.lastName}`,
  }),
  columnHelper.accessor('agentId', {
    header: 'Agent',
    cell: (info) =>
      `${info.getValue()?.firstName} ${info.getValue()?.lastName}`,
  }),
  columnHelper.accessor('totalPrice', {
    header: 'Total',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => getStatusTag(info.getValue()),
  }),
  columnHelper.accessor((row) => row.id, {
    header: 'Actions',
    cell: (info) => (
      <Menu>
        <MenuButton variant="noBg" p={0} as={Button}>
          <Center>
            <FiMoreVertical />
          </Center>
        </MenuButton>
        <MenuList>
          <MenuItem>View Detail</MenuItem>
        </MenuList>
      </Menu>
    ),
  }),
];

export const accessors = [
  { id: 1, name: 'Transactions', columns: transactionColumns },
  { id: 2, name: 'Commissions', columns: earningColumns },
  { id: 3, name: 'Deposits', columns: summaryColumns },

  { id: 4, name: 'Order History', columns: orderColumns },
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

export const selectDates = [
  {
    value: 'previousweeks',
    name: 'Previous Weeks',
  },
  {
    value: '1',
    name: '1 week ago',
  },
  {
    value: '2',
    name: '2 weeks ago',
  },
  {
    value: '3',
    name: '3 weeks ago',
  },
  {
    value: '4',
    name: '4 weeks ago',
  },
  {
    value: '5',
    name: '5 weeks ago',
  },
  {
    value: '6',
    name: '6 weeks ago',
  },
  {
    value: '7',
    name: '7 weeks ago',
  },
  {
    value: '8',
    name: '8 weeks ago',
  },
  {
    value: '9',
    name: '9 weeks ago',
  },
  {
    value: '10',
    name: '10 weeks ago',
  },
  {
    value: '11',
    name: '11 weeks ago',
  },
  {
    value: '12',
    name: '12 weeks ago',
  },
  {
    value: '13',
    name: '13 weeks ago',
  },
  {
    value: '14',
    name: '14 weeks ago',
  },
  {
    value: '15',
    name: '15 weeks ago',
  },
  {
    value: '16',
    name: '16 weeks ago',
  },
  {
    value: '17',
    name: '17 weeks ago',
  },
  {
    value: '18',
    name: '18 weeks ago',
  },
  {
    value: '19',
    name: '19 weeks ago',
  },
  {
    value: '20',
    name: '20 weeks ago',
  },
  {
    value: '21',
    name: '21 weeks ago',
  },
  {
    value: '22',
    name: '22 weeks ago',
  },
  {
    value: '23',
    name: '23 weeks ago',
  },
  {
    value: '24',
    name: '24 weeks ago',
  },
  {
    value: '25',
    name: '25 weeks ago',
  },
  {
    value: '26',
    name: '26 weeks ago',
  },
  {
    value: '27',
    name: '27 weeks ago',
  },
  {
    value: '28',
    name: '28 weeks ago',
  },
];


export const mobileDates = [
  {
    value: 'thisweek',
    name: 'This Week',
  },
  {
    value: 'lastweek',
    name: 'Last Week',
  },
  {
    value: '2',
    name: '2 weeks ago',
  },
  {
    value: '3',
    name: '3 weeks ago',
  },
  {
    value: '4',
    name: '4 weeks ago',
  },
  {
    value: '5',
    name: '5 weeks ago',
  },
  {
    value: '6',
    name: '6 weeks ago',
  },
  {
    value: '7',
    name: '7 weeks ago',
  },
  {
    value: '8',
    name: '8 weeks ago',
  },
  {
    value: '9',
    name: '9 weeks ago',
  },
  {
    value: '10',
    name: '10 weeks ago',
  },
  {
    value: '11',
    name: '11 weeks ago',
  },
  {
    value: '12',
    name: '12 weeks ago',
  },
  {
    value: '13',
    name: '13 weeks ago',
  },
  {
    value: '14',
    name: '14 weeks ago',
  },
  {
    value: '15',
    name: '15 weeks ago',
  },
  {
    value: '16',
    name: '16 weeks ago',
  },
  {
    value: '17',
    name: '17 weeks ago',
  },
  {
    value: '18',
    name: '18 weeks ago',
  },
  {
    value: '19',
    name: '19 weeks ago',
  },
  {
    value: '20',
    name: '20 weeks ago',
  },
  {
    value: '21',
    name: '21 weeks ago',
  },
  {
    value: '22',
    name: '22 weeks ago',
  },
  {
    value: '23',
    name: '23 weeks ago',
  },
  {
    value: '24',
    name: '24 weeks ago',
  },
  {
    value: '25',
    name: '25 weeks ago',
  },
  {
    value: '26',
    name: '26 weeks ago',
  },
  {
    value: '27',
    name: '27 weeks ago',
  },
  {
    value: '28',
    name: '28 weeks ago',
  },
];

