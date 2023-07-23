import React, { useContext } from 'react';
import DynamicTable from '../../common/DynamicTable';
import { Icon, Text } from '@chakra-ui/react';
import { data } from './data';
import { Info } from './../../common/Info';
import { PageScaffold } from '../../common/PageScaffold';
import { FaFileExcel } from 'react-icons/fa';
import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { CurrentPageContext } from '../../App';
const columnHelper = createColumnHelper();

const Index = () => {
  const { setCurrentPage, handleOpenModal, handleOpenDrawer } =
    useContext(CurrentPageContext);

  const billingColumns = [
    columnHelper.accessor('customer', {
      header: 'Customer',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Link
            style={{ color: 'blue', textDecoration: 'underline' }}
            onClick={() => setCurrentPage('customer-details')}
          >
            {value}
          </Link>
        );
      },
    }),
    columnHelper.accessor('points', {
      header: 'Points',
      cell: (info) => {
        const value = info.getValue();
        const textColor = value === 'DT' ? 'blue' : '';
        return (
          <span style={{ color: textColor, fontWeight: 'bold' }}>{value}</span>
        );
      },
    }),
    columnHelper.accessor('price', {
      header: 'Price',
      cell: (info) => {
        const value = info.getValue();
        const textColor = value.startsWith('-') ? 'red' : 'green';

        return <span style={{ color: textColor }}>{value}</span>;
      },
    }),
    columnHelper.accessor('beatLine', {
      header: 'Beat Line',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('totalBets', {
      header: 'Total Bets',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('percentage', {
      header: 'Percentage',
      cell: (info) => `${info.getValue()?.toFixed(2)}%`,
    }),
    columnHelper.accessor('win_loss', {
      header: 'Win/Loss',
      cell: (info) => {
        const value = info.getValue();
        const textColor = value.startsWith('-') ? 'red' : 'green';
        return <span style={{ color: textColor }}>{value}</span>;
      },
    }),
    columnHelper.accessor('fullAnalysis', {
      header: 'Full Analysis',
      cell: (info) => info.getValue(),
    }),
  ];
  return (
    <>
      <PageScaffold title="Billing">
        <Info>
          Closing line Analysis:
          <Icon as={FaFileExcel} ml={2} boxSize={10} color="green" />
          <Text variant="cardText">
            Based on last 14 days activity What is this?
          </Text>
        </Info>
        <DynamicTable
          columns={billingColumns}
          data={data}
          totalCount={data?.length}
          totalPages={0}
          size="sm"
          alignHeader="left"
          alignBody="left"
          variant="striped"
          colorScheme="gray"
        />
      </PageScaffold>
    </>
  );
};

export default Index;
