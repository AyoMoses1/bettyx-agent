export const data = [
  {
    title: 'Add one or more players to an agent',
    link: 'https://',
    caption: 'Player',
  },
  {
    title:
      'Add a new agent account. Agents have players under them(not agents)',
    link: 'https://',
    caption: 'Agent',
  },
  {
    title:
      'Add a new master agent account. Master agents have agents under them(not players)',
    link: 'https://',
    caption: 'Master',
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


export const formDataTwo = [
  {
    label: 'Max Straight Bet',
    value: 500,
  },
  {
    label: 'Max Per Offering',
    value: 500,
  },
  {
    label: 'Min Straight Bet',
    value: 10,
  },
  {
    label: 'Max Straight Bet',
    value: 500,
  },
  {
    label: 'Max Straight Bet',
    value: 500,
  },
  {
    label: 'Max Per Offering',
    value: 500,
  },
  {
    label: 'Min Straight Bet',
    value: 10,
  },
  {
    label: 'Max Straight Bet',
    value: 500,
  },
];

export const formData = [
  {
    label: 'Password',
    value: 'ALEX321',
  },
  {
    label: 'Name',
    value: '',
  },
  {
    label: 'Agent',
    value: 'ALEX321',
  },
  {
    label: 'Account Status',
    value: 'Active',
  },
];

export const formDataThree = [
  {
    label: 'Crypto Promo(%)',
    value: 0,
  },
  {
    label: 'Promo Type',
    value: 'Promo Credit',
  },
];

export const formSwitch = [
  { label: 'Sportbook:', isChecked: true },
  { label: 'Casino', isChecked: true },
  { label: 'Racebook:', isChecked: true },
  { label: 'Messaging:', isChecked: true },
  { label: 'Dynamic Live:', isChecked: true },
  { label: 'Prop Plus:', isChecked: true },
  { label: 'Lottery', isChecked: true },
];

export const formSwitchTwo = [
  { label: 'Enable Captcha:', isChecked: false },
];

export const caption =
  'These settings will apply to everyone under you unless you have assigned them settings of their own. Also, unlike the previous live provider this dynamic live system will use the players wager limit if it is LESS THAN the Max Straight Bet you set below. Example: If you set your Max Straight Bet below to $500 but a player under you has a $100 wager limit then the $100 wager limit is the one that will apply to him even in the dynamic live platform.';
