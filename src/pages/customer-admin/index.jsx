import React, { useState, useMemo, useContext } from 'react';
import { Flex, useDisclosure, Icon, Box, Button } from '@chakra-ui/react';
import TableTop from '../../common/TableTop';
import { FaCog, FaFileExcel } from 'react-icons/fa';
import DynamicTable from '../../common/DynamicTable';
import { data } from './helpers';
import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { CurrentPageContext } from '../../App';
import Modal from '../../common/Modal';
import EditForm from './components/EditForm';

const Index = () => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });
  const { setCurrentPage } = useContext(CurrentPageContext);
  const columnHelper = createColumnHelper();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleInputChange = (name, value) => {
    setTopInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const topTableButtons = [
    { name: '', icon: <FaCog />, asButton: true },
    {
      name: '',
      icon: <Icon as={FaFileExcel} ml={2} boxSize={10} color="green" />,
      asButton: false,
    },
  ];

  const tableTopInput = useMemo(
    () => [
      {
        name: 'Agents',
        label: '',
        placeholder: 'Search accounts...',
        type: 'text',
        float: true,
        buttons: topTableButtons,
      },
    ],
    []
  );

  const columns = [
    columnHelper.accessor('agent', {
      header: 'Agent',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Link
            style={{ color: 'blue', textDecoration: 'underline' }}
            onClick={() => setCurrentPage('customer-details')}
          >
            {value}
          </Link>
        );
      },
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
        <Button bgColor="blue" color="white" onClick={() => onOpen()} size={['sm', 'md']}>
          Edit
        </Button>
      ),
    }),
  ];

  return (
    <>
      <Flex>
        <TableTop
          onChange={handleInputChange}
          inputObj={tableTopInput}
          title="Customer Admin"
        />
      </Flex>
      <DynamicTable
        totalCount={data?.length}
        columns={columns}
        data={data}
        size="sm"
        title="Customer Admin"
      />
      <Modal isOpen={isOpen} onClose={onClose} size={["md","6xl"]}>
        <EditForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default Index;
