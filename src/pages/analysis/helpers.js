import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
const columnHelper = createColumnHelper();

export const billingColumns = [
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: (info) => {
      const value = info.getValue();
      return (
        <Link style={{ color: 'blue', textDecoration: 'underline' }}>
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
