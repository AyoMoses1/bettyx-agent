import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import styled from 'styled-components'

const DrawerComponent = (props) => {
  const drawerStyles = {
    content: {
      padding: '0',
    },
  };

  return (
    <Drawer
      isOpen={props.isOpen}
      placement="right"
      onClose={props.onClose}
      size={props.size}
      drawerStyle={drawerStyles}
    >
      <DrawerOverlay />
      <DrawerContent p={0}>
        <StyledDrawerCloseButton>
          {props.closeBtn}
        </StyledDrawerCloseButton>
        <DrawerHeader borderBottomWidth="0px">{props.title}</DrawerHeader>
        <DrawerBody borderBottomWidth="0px">{props.children}</DrawerBody>
        <DrawerFooter borderTopWidth="0px">{props.button}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const StyledDrawerCloseButton = styled(DrawerCloseButton)`
  border: none !important;
  outline: none !important;
`

export default DrawerComponent;
