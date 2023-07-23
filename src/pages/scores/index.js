import React, { useContext } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import Drawer from '../../common/Drawer';
import FootballMatchesGrid from './components/helpers';
import { CurrentPageContext } from '../../App';
import styled from 'styled-components';

const Index = () => {
  const { isDrawerOpen, handleCloseDrawer } = useContext(CurrentPageContext);

  return (
    <Drawer
      isOpen={isDrawerOpen}
      onClose={handleCloseDrawer}
      title="Scoreboard"
      size="md"
      closeBtn={
        <StyledButton>
          Close
        </StyledButton>
      }
    >
      <FootballMatchesGrid />
    </Drawer>
  );
};

const StyledButton = styled(Button)`
  text-decoration: underline;
  color: red;
`;

export default Index;
