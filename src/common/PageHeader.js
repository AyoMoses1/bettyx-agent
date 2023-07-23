import {
  Box,
  Flex,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import breakPoints from '../utils/breakPoints';

const PageHeader = (props) => {
  const [isLargerThan1500] = useMediaQuery(breakPoints.laptopL);
  return (
    <Box position='fixed' width='100%' zIndex='900'>
      <Flex
        mb={3}
        alignItems='center'
        justifyContent='space-between'
        p={4}
        pl={isLargerThan1500 ? 20 : 10}
        bgColor='primary'
      >
        <Text variant='whiteBoldNormal'>{props.title}</Text>
      </Flex>
    </Box>
  );
};

export default PageHeader;