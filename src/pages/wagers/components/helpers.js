import { createColumnHelper } from '@tanstack/react-table';
const columnHelper = createColumnHelper();

export const data = [
  {
    name: '4LILKEN',
    caption: 'n6dinner8$',
  },
  {
    name: 'JohnDoe',
    caption: 'p@ssw0rd!',
  },
  {
    name: 'JaneSmith',
    caption: '123456',
  },
  {
    name: 'Alice123',
    caption: 'qwerty',
  },
  {
    name: 'BobJohnson',
    caption: 'password123',
  },
  {
    name: 'EmilyBrown',
    caption: 'secret12',
  },
  {
    name: 'MichaelClark',
    caption: 'letmein',
  },
  {
    name: 'SarahWilson',
    caption: 'sunshine',
  },
  {
    name: 'DavidMiller',
    caption: 'welcome',
  },
  {
    name: 'OliviaDavis',
    caption: '123abc',
  },
  {
    name: 'DanielTaylor',
    caption: 'football',
  },
  {
    name: 'SophiaThomas',
    caption: 'baseball',
  },
  {
    name: 'MatthewAnderson',
    caption: 'basketball',
  },
  {
    name: 'AvaWhite',
    caption: 'tennis',
  },
  {
    name: 'JamesJones',
    caption: 'golf',
  },
  {
    name: 'LilyWilson',
    caption: 'swimming',
  },
];

export const wagerData = [
  {
    customer: 'R1902',
    deleted: 'Jul 3, 2023 2:03 AM',
    description: 'Chicago CubsML -113',
    risk: 67,
    toWin: 99,
    deletedBy: 'PRICE',
  },
];

export const wagerColumns = [
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('deleted', {
    header: 'Deleted(PST)',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('risk', {
    header: 'Risk',
    cell: (info) => {
      const value = info.getValue();
      const textColor = 'red';
      return <span style={{ color: textColor }}>${value}</span>;
    },
  }),
  columnHelper.accessor('toWin', {
    header: 'To Win',
    cell: (info) => {
      const value = info.getValue();
      const textColor = 'black';
      return <span style={{ color: textColor }}>${value}</span>;
    },
  }),
  columnHelper.accessor('deletedBy', {
    header: 'Deleted By',
    cell: (info) => info.getValue()
  }),
];
