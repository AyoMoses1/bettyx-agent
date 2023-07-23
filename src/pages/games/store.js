import React, { useState, useMemo, useEffect } from 'react';
import { useDisclosure, Box, Flex, HStack, Icon } from '@chakra-ui/react';
import DynamicTable from '../../common/DynamicTable';
import {
  AiFillBaseball,
  AiFillTrophy,
  AiFillQuestionCircle,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { FaFootballBall, FaRegFutbol, FaUsers } from 'react-icons/fa';
import {
  columns,
  selectBaseball,
  selectCards,
  selectDates,
  selectGames,
  selectGrades,
  selectMatchUps,
  selectNfl,
  selectUsers,
} from './helpers';
import { data } from './data.js';
import generateInputs from '../../common/DynamicForm';
import { BiChevronDown } from 'react-icons/bi';

const Index = () => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });

  const tableLeftInput = useMemo(() => [
    {
      name: 'time',
      label: '',
      type: 'select',
      width: '200px',
      options: selectDates.map((item) => ({
        value: item.value,
        name: item.name,
      })),
    },
    {
      name: 'games',
      label: 'Games to show',
      type: 'select',
      width: '200px',
      variant: 'outline-select',
      options: selectGames.map((item) => ({
        value: item.value,
        name: item.name,
      })),
    },
  ]);

  const tableRightInput = useMemo(
    () => [
      {
        name: 'Agents',
        label: '',
        placeholder: 'Search accounts...',
        type: 'text',
      },
      {
        name: 'grade',
        label: '',
        type: 'select',
        width: '200px',
        options: selectGrades.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
      {
        name: 'user',
        label: '',
        type: 'select',
        width: '200px',
        options: selectUsers.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
    ],
    []
  );

  const tableBottomInput = useMemo(
    () => [
      {
        name: 'mlb',
        label: '',
        icon: (
          <Box display="flex" alignItems="center">
            <Icon as={FaUsers} boxSize={25} />
            <Icon as={BiChevronDown} boxSize={5} />
          </Box>
        ),
        type: 'select',
        width: '50px',
        variant: 'outline-select',
        options: selectBaseball.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
      {
        name: 'cards',
        label: '',
        icon: (
          <Box display="flex" alignItems="center">
            <Icon as={AiFillTrophy} boxSize={25} />
            <Icon as={BiChevronDown} boxSize={5} />
          </Box>
        ),
        type: 'select',
        width: '50px',
        variant: 'outline-select',
        options: selectCards.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
      {
        name: 'NFL',
        label: '',
        icon: (
          <Box display="flex" alignItems="center">
            <Icon as={FaUsers} boxSize={25} />
            <Icon as={BiChevronDown} boxSize={5} />
          </Box>
        ),
        type: 'select',
        width: '50px',
        variant: 'outline-select',
        options: selectNfl.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
      {
        name: 'Match Ups',
        label: '',
        icon: (
          <Box display="flex" alignItems="center">
            <Icon as={AiFillTrophy} boxSize={25} />
            <Icon as={BiChevronDown} boxSize={5} />
          </Box>
        ),
        type: 'select',
        width: '50px',
        variant: 'outline-select',
        options: selectMatchUps.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
      {
        name: 'Contest',
        label: '',
        icon: (
          <Box display="flex" alignItems="center">
            <Icon as={AiOutlineQuestionCircle} boxSize={25} />
            <Icon as={BiChevronDown} boxSize={5} />
          </Box>
        ),
        type: 'select',
        width: '50px',
        variant: 'outline-select',
        options: selectCards.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
    ],
    []
  );

  return (
    <>
      <Flex justify="space-between" alignItems="center" p={4}>
        <HStack align="center">
          {tableLeftInput.map((input) =>
            generateInputs({
              ...input,
            })
          )}
        </HStack>
        <HStack>
          {tableRightInput.map((input) =>
            generateInputs({
              ...input,
            })
          )}
        </HStack>
      </Flex>
      <Flex justify="space-between">
        <HStack>
          {tableBottomInput.map((input) =>
            generateInputs({
              ...input,
            })
          )}
        </HStack>
      </Flex>
      <DynamicTable
        totalCount={data?.length}
        columns={columns}
        data={data}
        size="sm"
        variant="striped"
        colorScheme="gray"
      />
    </>
  );
};

export default Index;
