import { Box } from '@chakra-ui/react';

import PageHeader from './PageHeader';

export const PageScaffold = (props) => {
  return (
    <>
      <PageHeader title={props.title} />
      <Box maxW='100%' p={4} pt={20}>
        {props.children}
      </Box>
    </>
  );
};


export default PageScaffold;
