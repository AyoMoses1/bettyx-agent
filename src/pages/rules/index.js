import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import { accordionObj } from './components/helpers';

function index() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple margin={2} bg="blue">
      {accordionObj.map((item) => (
        <AccordionItem>
          <h1>
            <AccordionButton
              sx={{ bg: 'blue' }}
              _hover={{ bg: 'turquoise' }}
              marginBottom={4}
            >
              <Heading variant="h1" textDecoration="underline" color="white">
                {item.header}
              </Heading>
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <OrderedList pl={8}>
              {item.data.lists.map((list) => (
                <ListItem color="white" mb={4} fontSize={12}>{list}</ListItem>
              ))}
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default index;
