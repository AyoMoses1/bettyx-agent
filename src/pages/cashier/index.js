import React, { useState, useMemo, useEffect } from 'react';
import { Flex, useDisclosure, Icon } from '@chakra-ui/react';
import TableTop from '../../common/TableTop';
import { FaCog, FaFileExcel } from 'react-icons/fa';
import DynamicTable from '../../common/DynamicTable';
import {
  columns,
  data,
  selectMode,
} from './components/helpers';

const Index = () => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });
  const { onOpen, onClose } = useDisclosure();

  const handleInputChange = (name, value) => {
    setTopInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const tableTopInput = useMemo(
    () => [
      {
        name: 'Agents',
        label: '',
        placeholder: 'Search...',
        type: 'text',
        float: false
      },
      {
        name: 'time',
        type: 'select',
        float: true,
        size:'sm',
        width: '200px',
        options: selectMode.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
    ],
    []
  );

  return (
    <>
      <Flex>
        <TableTop
          onChange={handleInputChange}
          inputObj={tableTopInput}
        />
      </Flex>
      <DynamicTable
        totalCount={data?.length}
        columns={columns}
        data={data}
        size="sm"
        title="Customer Admin"
        variant="striped"
        colorScheme="gray"
      />
    </>
  );
};

export default Index;
