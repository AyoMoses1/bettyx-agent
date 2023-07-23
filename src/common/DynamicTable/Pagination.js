import { Box, Flex, Select, IconButton, Text } from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const rowsNo = [10, 25, 50, 100, 200];

const Pagination = ({
  previousPage,
  nextPage,
  gotoPage,
  canPreviousPage,
  canNextPage,
  page,
  totalCount,
  pageSize,
  setPageSize,
  pageIndex,
  pageCount,
}) => {
  return (
    <Box
      m={2}
      display="flex"
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      flexWrap="wrap"
      alignItems="center"
    >
      <Box mt={5} mb={4} display="flex" justifyContent="left">
        <Text>
          showing {pageIndex * pageSize + 1} to
          {pageIndex * pageSize + pageSize} result of {totalCount} results
        </Text>
      </Box>

      <Box
        flexWrap="wrap"
        display="flex"
        justifyContent={{ base: 'left', md: 'right' }}
        alignItems="center"
      >
        <Flex>
          <Box pt={2} mr={2}>
            <Text>row per page</Text>
          </Box>
          <Select
            value={pageSize}
            mr={10}
            width="fit-content"
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {rowsNo.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
        </Flex>
        <Box
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          my={{ base: 4, md: 0 }}
        >
          <Box mr={5}>
            <Text>
              Page {pageIndex + 1} of {pageCount}
            </Text>
          </Box>
          <IconButton
            onClick={previousPage}
            disabled={!canPreviousPage}
            aria-label={''}
          >
            <AiOutlineLeft />
          </IconButton>
          <IconButton
            ml={6}
            onClick={nextPage}
            disabled={!canNextPage}
            aria-label={''}
          >
            <AiOutlineRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Pagination;
