import { createColumnHelper } from '@tanstack/react-table';
const columnHelper = createColumnHelper();


export const billingColumns = [
  columnHelper.accessor('time', {
    header: 'Time',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) =>{
       const value = info.getValue()
       const textColor = value === 'DT' ? 'blue' : '';
       return (
         <span style={{ color: textColor, fontWeight: "bold" }}>
           {value}
         </span>
       );
      },
  }),
  columnHelper.accessor('transaction', {
    header: 'Transaction',
    cell: (info) => {
      const value = info.getValue();
      const textColor = value.startsWith('-') ? 'red' : 'green';

      return (
        <span style={{ color: textColor }}>
          {value}
        </span>
      );
    },
  }),
  columnHelper.accessor('balance', {
    header: 'Balance',
    cell: (info) => {
      const value = info.getValue();
      const textColor = value.startsWith('-') ? 'red' : 'green';

      return (
        <span style={{ color: textColor }}>
          {value}
        </span>
      );
    },
  }),
];

