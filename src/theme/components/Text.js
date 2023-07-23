export const TextStyle = {
  baseStyle: () => ({
    fontSize: { base: '12px', lg: '1.2vw' },
  }),
  variants: {
    mutedCenter: (props) => ({
      color: props.theme.colors.muted,
      textAlign: 'center',
    }),
    normalBold: (props) => ({
      fontWeight: '600',
    }),
    tableText: (props) => ({
      fontWeight: '400',
      fontSize: '1rem',
      lineHeight: '1.45',
      color: '#373a3c',
    }),
    smallBoldNormal: (props) => ({
      fontWeight: 'bold',
      fontSize: '1.15vw',
    }),
    nav: (props) => ({
      fontSize: { base: '16px', lg: '1.1vw' },
    }),
    whiteBoldNormal: (props) => ({
      fontWeight: 'bold',
      textAlign: 'center',
      color: props.theme.colors.white,
    }),
    heroText: (props) => ({
      fontWeight: '400',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : '#475569',
      fontSize: '18px',
    }),
    cardText: (props) => ({
      fontWeight: '400',
      color: props.theme.colors.white,
      fontSize: { base: '12px', md: '14px', lg: '1.1vw' },
    }),
    reviewText: (props) => ({
      fontWeight: '200',
      fontSize: 24,
      lineHeight: 7,
      textAlign: 'center',
      letterSpacing: '-0.02em',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : '#454343',
    }),
    footerText: (props) => ({
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 5,
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.textWhite
          : props.theme.colors.gray1,
    }),
    faqQuestion: (props) => ({
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '28px',
      color:
        props.colorMode === 'dark'
          ? props.theme.colors.primary['dark']
          : '#101828',
    }),
    faqAnswer: (props) => ({
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#667085',
    }),
    smallLight: {
      fontWeight: '300',
      fontSize: { base: '8px', lg: '1vw' },
    },
  },
  defaultProps: {},
};
