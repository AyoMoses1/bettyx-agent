import { Alert, AlertIcon } from '@chakra-ui/react';

export const Info = ({children}) => {
    return (
        <Alert status='info'>
        <AlertIcon />
        {children}
      </Alert>
    );
};