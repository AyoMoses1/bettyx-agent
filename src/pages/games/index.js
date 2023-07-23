import React, { useState, useMemo, useEffect } from 'react';
import {
  useDisclosure,
  Box,
  Flex,
  HStack,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
} from '@chakra-ui/react';
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
import styled from 'styled-components';

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
      <Box w="100%" p={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Score</Th>
              <Th>Spread</Th>
              <Th>Moneyline</Th>
              <Th>Total</Th>
              <Th>Team Totals</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((entry, index) => (
              <Tr key={index}>
                <Td>Period: 1st 5 linnings</Td>
                <Td>
                  <HStack>
                    <StyledBox bgColor="blue" color="red">
                      $
                    </StyledBox>
                    <StyledBox bgColor="blue" color="skyblue">
                      R
                    </StyledBox>
                    <StyledBox bgColor="blue" color="white">
                      #
                    </StyledBox>
                  </HStack>
                </Td>
                <Td color={index % 2 === 0 ? 'red.500' : 'blue.500'}>
                  <HStack>
                    <StyledBox bgColor="#06364d">+</StyledBox>
                    <StyledBox bgColor="#06364d">-</StyledBox>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <StyledBox bgColor="blue">+</StyledBox>
                    <StyledBox bgColor="blue">-</StyledBox>
                  </HStack>
                </Td>
                <Td color={index % 2 === 0 ? 'green.500' : 'blue.500'}>
                  <HStack>
                    <StyledBox bgColor="blue">+</StyledBox>
                    <StyledBox bgColor="blue">-</StyledBox>
                  </HStack>
                </Td>
                <Td>
                  <HStack>
                    <StyledBox bgColor="blue">+</StyledBox>
                    <StyledBox bgColor="blue">-</StyledBox>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box bg="blue" color="white">
        MLB
      </Box>
      <Table variant="simple">
        <Tbody>
          {data.map((entry, index) => (
            <Tr key={index}>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Table variant="simple">
        <Tbody>
          {data.map((entry, index) => (
            <Tr key={index}>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Table variant="simple">
        <Tbody>
          {data.map((entry, index) => (
            <Tr key={index}>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Table variant="simple">
        <Tbody>
          {data.map((entry, index) => (
            <Tr key={index}>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Table variant="simple">
        <Tbody>
          {data.map((entry, index) => (
            <Tr key={index}>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
              <Td>
                <StyledBoxTwo>0</StyledBoxTwo>
                <StyledBoxTwo>1</StyledBoxTwo>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Index;

const StyledBox = styled(Box)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${(props) => props.bgColor};
`;

const StyledBoxTwo = styled(Box)`
  background: #06364d;
  color: white;
  margin-right: 10px;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  width: 200px;
`;
