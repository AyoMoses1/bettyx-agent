import { FaTimes } from 'react-icons/fa';
import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor('agent', {
    header: 'Agent',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('customer', {
    header: 'Customer',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('password', {
    header: 'Password',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('accepted', {
    header: 'Accepted(PST)',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('description', {
    header: 'Descripton',
    cell: (info) => {
      const value = info.getValue();
      return (
        <div>
          <Text variant="tableText" sx={{ color: 'green', fontWeight: 'bold' }}>
            {value.name}
          </Text>
          <ul style={{ paddingLeft: '20px' }}>
            {value.teams.map((team, index) => (
              <HStack key={index}>
                <Image src={team.logo} sx={{ width: '20px' }} />
                <Text variant="tableText" fontSize={12}>
                  {team.name}
                </Text>
              </HStack>
            ))}
          </ul>
        </div>
      );
    },
  }),
  columnHelper.accessor('risk', {
    header: 'Risk',
    cell: (info) => {
      const value = info.getValue();
      const textColor = 'red';
      return <span style={{ color: textColor }}>${value}</span>;
    },
  }),
  columnHelper.accessor('win', {
    header: 'To Win',
    cell: (info) => {
      const value = info.getValue();
      const textColor = 'green';
      return <span style={{ color: textColor }}>${value}</span>;
    },
  }),
  columnHelper.accessor('action', {
    header: '',
    cell: (info) => {
      return <FaTimes color="red" />;
    },
  }),
];

export const data = [
  {
    agent: 'JAV1123',
    customer: 'BALL890',
    password: 'Gryboski24',
    accepted: 'June 5, 2023 6:00 AM',
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://qph.cf2.quoracdn.net/main-qimg-0c1ab4a363e9efdf16f9d7bb480e3fe4',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://media.istockphoto.com/id/1363147514/vector/football-badge-icon-design-template.jpg?s=612x612&w=0&k=20&c=Ge1WiVvWCdJk1YGzBvLgNhnsUhUH4Q3jvrdSwN6pezY=',
        },
      ],
    },
    risk: 99,
    win: 385,
  },
  {
    agent: 'XKJ5432',
    customer: 'PLAY456',
    password: 'Smith2023',
    accepted: 'July 10, 2023 2:30 PM',
    risk: 75,
    win: 225,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
  {
    agent: 'QWE7890',
    customer: 'SPIN123',
    password: 'Johnson777',
    accepted: 'May 15, 2023 9:45 AM',
    risk: 80,
    win: 320,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
  {
    agent: 'ABC4567',
    customer: 'BET890',
    password: 'Thompson123',
    accepted: 'April 25, 2023 8:15 AM',
    risk: 60,
    win: 180,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
  {
    agent: 'XYZ3210',
    customer: 'WIN777',
    password: 'Davis2023',
    accepted: 'August 2, 2023 1:20 PM',
    risk: 70,
    win: 280,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
  {
    agent: 'PLM9876',
    customer: 'LUCK222',
    password: 'Harris456',
    accepted: 'July 17, 2023 11:10 AM',
    risk: 85,
    win: 255,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
  {
    agent: 'DEF6543',
    customer: 'BET456',
    password: 'Clark888',
    accepted: 'June 20, 2023 3:40 PM',
    risk: 95,
    win: 475,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
  {
    agent: 'MNO4321',
    customer: 'SPIN789',
    password: 'Adams555',
    accepted: 'May 8, 2023 7:55 AM',
    risk: 65,
    win: 195,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
  {
    agent: 'RST0987',
    customer: 'PLAY321',
    password: 'Walker2023',
    accepted: 'August 15, 2023 4:30 PM',
    risk: 90,
    win: 450,
    description: {
      name: 'Parlay -3 Teams',
      teams: [
        {
          name: 'Atlanta Braves ML-124',
          logo: 'https://soccerprime.com/wp-content/uploads/2022/09/orlando-pirates-logo.jpg',
        },
        {
          name: 'Tampa Bay RaysML -142',
          logo: 'https://i.pinimg.com/originals/ab/03/7f/ab037fcdf84ba820a226534cbcc0ab92.jpg',
        },
        {
          name: 'Miami MarlinsML -170',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4cYqQg__JNwytLbflZdVToNzI_cX3wkwUw&usqp=CAU',
        },
      ],
    },
  },
];

export const selectDates = [
  {
    value: 'today',
    name: 'Today',
  },
  {
    value: '3',
    name: '3 days',
  },
  {
    value: '7',
    name: '7 days',
  },
  {
    value: '14',
    name: '14 days',
  },
];

export const selectTypes = [
  {
    value: 'all',
    name: 'All Types',
  },
  {
    value: 'straight',
    name: 'Straight',
  },
  {
    value: 'parlay',
    name: 'Parlay',
  },
  {
    value: 'bets',
    name: 'If Bets',
  },
  {
    value: 'teaser',
    name: 'Teaser',
  },
  {
    value: 'racebook',
    name: 'Racebook',
  },
  {
    value: 'contest',
    name: 'Contest',
  },
  {
    value: 'manual',
    name: 'Manual Plays',
  },
  {
    value: 'live',
    name: 'Live/Props',
  },
];

export const selectAmount = [
  {
    value: 'any',
    name: 'Any Amount',
  },
  {
    value: 100,
    name: '$100+',
  },
  {
    value: 500,
    name: '$500+',
  },
  {
    value: 1000,
    name: '$1000+',
  },
];
