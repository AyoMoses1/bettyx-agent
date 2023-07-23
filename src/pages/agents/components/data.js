import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();

export const results = [
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

export const data = [
  {
    agent: 'ALEX321',
    password: '123',
    balance: 100.0,
    settle: 0.0,
    lastWeek: 119,
    lastTransaction: 576,
  },
  {
    agent: 'JOHN123',
    password: '456',
    balance: 250.0,
    settle: 50.0,
    lastWeek: 83,
    lastTransaction: 324,
  },
  {
    agent: 'SARA789',
    password: '789',
    balance: 50.0,
    settle: 10.0,
    lastWeek: 53,
    lastTransaction: 208,
  },
  {
    agent: 'MIKE567',
    password: '321',
    balance: 75.0,
    settle: 25.0,
    lastWeek: 96,
    lastTransaction: 432,
  },
  {
    agent: 'LISA234',
    password: '654',
    balance: 200.0,
    settle: 100.0,
    lastWeek: 62,
    lastTransaction: 256,
  },
  {
    agent: 'SAM456',
    password: '987',
    balance: 150.0,
    settle: 75.0,
    lastWeek: 75,
    lastTransaction: 290,
  },
  {
    agent: 'EMILY789',
    password: '234',
    balance: 300.0,
    settle: 150.0,
    lastWeek: 43,
    lastTransaction: 176,
  },
  {
    agent: 'DAVID123',
    password: '567',
    balance: 125.0,
    settle: 30.0,
    lastWeek: 102,
    lastTransaction: 396,
  },
  {
    agent: 'OLIVIA567',
    password: '321',
    balance: 80.0,
    settle: 20.0,
    lastWeek: 88,
    lastTransaction: 344,
  },
  {
    agent: 'CHRIS234',
    password: '654',
    balance: 180.0,
    settle: 90.0,
    lastWeek: 56,
    lastTransaction: 224,
  },
  {
    agent: 'AMY789',
    password: '987',
    balance: 220.0,
    settle: 110.0,
    lastWeek: 70,
    lastTransaction: 280,
  },
  // Add more dummy objects here...
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