import React, { useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import Pagination from './Pagination';
import Loading from '../../common/Loading';

const Index = ({
  columns,
  data,
  size,
  hidePagination,
  totalCount,
  setPageProps,
  pageProps,
  totalPages,
  isLoading,
  alignHeader,
  alignBody,
  variant,
  colorScheme,
}) => {
  const { colorMode } = useColorMode();
  const pagination = useMemo(
    () => ({
      pageIndex: pageProps?.pageIndex ?? 0,
      pageSize: pageProps?.pageSize ?? 10,
    }),
    [pageProps?.pageIndex, pageProps?.pageSize]
  );
  const table = useReactTable({
    data,
    columns,
    pageCount: totalPages ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPageProps,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
  });

  const tableHeadRows = table.getHeaderGroups().map((headerGroup) => (
    <Tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <Th
          key={header.id}
          layerStyle="dark"
          textAlign={alignHeader}
          style={{ wordBreak: 'keep-all', color: 'white' }}
          background="tableHeader"
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Th>
      ))}
    </Tr>
  ));

  const tableBodyRows = table.getRowModel().rows.map((row) => (
    <Tr key={row.id}>
      {row.getVisibleCells().map((cell, index, cells) => {
        return (
          <Td
            key={cell.id}
            width="auto"
            textAlign={alignBody}
            style={{ wordBreak: 'break-all', fontSize: '12px' }}
            overflowY="auto"
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Td>
        );
      })}
    </Tr>
  ));

  return (
    <Box overflowX="auto">
      {isLoading && <Loading text="loading data" />}
      <TableContainer width="100%">
        <Table variant={variant} colorScheme={colorScheme} size={size}>
          <Thead backgroundColor={colorMode === 'dark' ? 'black' : '#F0F2F5'}>
            {tableHeadRows}
          </Thead>
          <Tbody>{tableBodyRows}</Tbody>
        </Table>
      </TableContainer>
      {/* {!hidePagination && (
        <Pagination
          previousPage={table.previousPage}
          nextPage={table.nextPage}
          gotoPage={table.setPageIndex}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          page={table.getPageCount()}
          totalCount={totalCount ?? 0}
          pageSize={table.getState().pagination.pageSize}
          setPageSize={table.setPageSize}
          pageIndex={table.getState().pagination.pageIndex}
          pageCount={totalPages ?? 0}
        />
      )} */}
    </Box>
  );
};

export default Index;
