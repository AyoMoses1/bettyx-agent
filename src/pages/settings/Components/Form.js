import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { formData } from './helpers';

const MyForm = () => {
  return (
    <Box margin="auto" p={8} bg="blue" color="white" mt={1}>
      <form>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {formData.map((item) => (
            <>
              <GridItem>
                <FormControl>
                  <FormLabel>{item.label}</FormLabel>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <Select placeholder="Select option">
                    {item.options.map((option) => (
                      <option value="" style={{ color: 'black' }}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </GridItem>
            </>
          ))}
        </Grid>
      </form>
    </Box>
  );
};

export default MyForm;
