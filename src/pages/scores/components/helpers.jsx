import {
  Grid,
  GridItem,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  HStack,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { footballMatches } from './data';

const FootballMatchesGrid = () => {
  return (
    <Accordion allowToggle p={0}>
      <AccordionItem>
        <h2>
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            bg="primary"
            color="white"
            _hover={{ background: 'primary' }}
          >
            <Box>MLB</Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid templateColumns="repeat(2, 1fr)">
            {footballMatches.map((match, index) => (
              <>
                <StyledGridItem key={index}>
                  <StyledBox>
                    <StyledText>{match.time}</StyledText>
                  </StyledBox>
                  <HStack spacing={2} align="center">
                    <Image
                      src={match.homeLogo}
                      alt={match.homeClub}
                      boxSize={4}
                    />
                    <StyledText>{match.homeClub}</StyledText>
                  </HStack>
                  <HStack spacing={2} align="start">
                    <Image
                      src={match.awayLogo}
                      alt={match.awayClub}
                      boxSize={4}
                    />
                    <StyledText>{match.awayClub}</StyledText>
                  </HStack>
                </StyledGridItem>
              </>
            ))}
          </Grid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const StyledText = styled(Text)`
  font-size: 12px;
  text-transform: uppercase;
`;

const StyledBox = styled(Box)`
  background: #eeeeee;
`;

const StyledGridItem = styled(GridItem)`
  border: 2px solid #dcdcdc;
  width: 100%;
`;

export default FootballMatchesGrid;
