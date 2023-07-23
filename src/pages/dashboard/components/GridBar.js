import React from 'react';
import { GridItem, Flex, Text } from '@chakra-ui/react';

const GridBar = ({ span, data }) => {
  return (
    <GridItem colSpan={span} height="30px" bg="blue" px={4}>
      <Flex justifyContent="space-between" align="center" height="100%">
        <Text variant="cardText" color="white">{data.title}</Text>
        <Text variant="cardText" color={data.value.startsWith("+") ? "green": "red"}>{data.value}</Text>
      </Flex>
    </GridItem>
  );
};

export default GridBar;
