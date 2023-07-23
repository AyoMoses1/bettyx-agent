import {
  Box,
  Button,
  HStack,
  Select,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Info } from '../../common/Info';
import PageScaffold from '../../common/PageScaffold';
import DynamicTable from '../../common/DynamicTable';
import { data } from './components/data';
import { agentColumns } from './components/helpers';
import Modal from '../../common/Modal';
import NewTransaction from './components/NewTransaction';

const Index = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const onTransaction = () => {
    onOpen();
  };

  const handleSubmit = () => {
    console.log('form submitted...');
  };

  return (
    <>
      <Info>
        <Box ml="auto" bg="blue" color="white">
          <Select placeholder="Agent Management" border="none" color="white">
            <option value="30">Agent Management</option>
            <option value="60">Active Player Count</option>
            <option value="90">Accounting</option>
          </Select>
        </Box>
      </Info>
      <DynamicTable
        columns={agentColumns(onTransaction)}
        data={data}
        totalCount={data?.length}
        totalPages={0}
        size="md"
        alignHeader="left"
        alignBody="left"
      />
      <Modal
        title="New Transaction"
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
      >
        <NewTransaction onClose={onClose} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default Index;
