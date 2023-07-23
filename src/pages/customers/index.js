import React, { useContext } from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import Modal from '../../common/Modal';
import { CurrentPageContext } from '../../App';
import styled from 'styled-components';
import ModalOptions from './ModalOptions';

const Index = () => {
  const { isModalOpen, handleCloseModal } = useContext(CurrentPageContext);

  return (
    <Modal
      title="Add Customer"
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      size={["sm","md"]}
    >
      <ModalOptions onClose={handleCloseModal} />
    </Modal>
  );
};

const StyledButton = styled(Button)`
  text-decoration: underline;
  color: red;
`;

export default Index;
