import { useState, useContext } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Flex,
} from '@chakra-ui/react';
import { CurrentPageContext } from '../../App';

const FeedbackModal = ({ isOpen, onClose }) => {
  const { isModalOpen, handleCloseModal } =
    useContext(CurrentPageContext);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendFeedback = () => {
    console.log('Sending feedback:', { subject, message });
    onClose();
  };

  return (
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>We value your feedback, Thank you!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Subject</FormLabel>
            <Input value={subject} onChange={handleSubjectChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea value={message} onChange={handleMessageChange} />
          </FormControl>
          <Text mb={4} fontSize={10}>
            Please note that this is for website feedback only and should not be
            used for any Customer Service requests. Such requests cannot and
            will not be accepted via this system.
          </Text>
          <Flex justifyContent="flex-end">
            <Button variant="success" onClick={handleSendFeedback}>
              Send
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeedbackModal;
