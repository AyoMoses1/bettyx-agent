import React, { useMemo, useState } from 'react';
import DynamicTable from '../../common/DynamicTable';
import { mobileDates, selectDates, selectMode, summaryColumns } from './components/helpers';
import { summary as data } from './components/data';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Select,
  HStack,
  Flex,
} from '@chakra-ui/react';
import TableTop from '../../common/TableTop';
import generateInputs from '../../common/DynamicForm';
import { AiOutlineSetting } from 'react-icons/ai';
import { FaFileExcel, FaPrint } from 'react-icons/fa';

const Index = (props) => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });

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
        float: false,
      },
      {
        name: 'time',
        type: 'select',
        float: true,
        size: 'sm',
        width: '200px',
        options: selectMode.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
    ],
    []
  );

  const tableLeftInput = useMemo(() => [
    {
      name: 'time',
      label: '',
      type: 'select',
      width: '150px',
      variant: 'outline-select',
      options: selectDates.map((item) => ({
        value: item.value,
        name: item.name,
      })),
    },
  ]);
  const tableLeftMobileInput = useMemo(() => [
    {
      name: 'time',
      label: '',
      type: 'select',
      width: '150px',
      variant: 'outline-select',
      options: mobileDates.map((item) => ({
        value: item.value,
        name: item.name,
      })),
    },
  ]);

  return (
    <Box py={4}>
      <Tabs variant="enclosed" isLazy>
        <Flex justifyContent="space-between" px={4}>
          <TabList>
            <Tab display={['none', 'block']}>This Week</Tab>
            <Tab display={['none', 'block']}>Last Week</Tab>
            <Box mt={4} display={['none', 'block']}>
              {tableLeftInput.map((input) =>
                generateInputs({
                  ...input,
                })
              )}
            </Box>
            <Box mt={4} display={['block', 'none']}>
              {tableLeftMobileInput.map((input) =>
                generateInputs({
                  ...input,
                })
              )}
            </Box>
          </TabList>
          <HStack bg="gray.200" spacing={4} px={4}>
            <Select>
              <option>With a balance</option>
              <option>Active for the week</option>
              <option>Over Settle</option>
              <option>Big Figures</option>
              <option>Summary</option>
            </Select>
            <Box>
              <AiOutlineSetting size={24} />
            </Box>
            <Box display={['none', 'block']}>
              <FaPrint size={24} />
            </Box>
            <Box display={['none', 'block']}>
              <FaFileExcel size={24} />
            </Box>
          </HStack>
        </Flex>
        <TabPanels>
          <TabPanel>
            <DynamicTable
              columns={summaryColumns}
              data={data}
              totalCount={data?.length}
              totalPages={0}
            />
          </TabPanel>
          <TabPanel>
            <DynamicTable
              columns={summaryColumns}
              data={data}
              totalCount={data?.length}
              totalPages={0}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <DynamicTable
        columns={summaryColumns}
        data={data}
        totalCount={data?.length}
        totalPages={0}
      />
      <DynamicTable
        columns={summaryColumns}
        data={data}
        totalCount={data?.length}
        totalPages={0}
      />
    </Box>
  );
};

export default Index;
