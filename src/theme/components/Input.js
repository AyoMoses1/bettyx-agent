export const InputStyle = {
  baseStyle: (props) => ({
    field: {
      bg: 'white',
      borderWidth: 1,
      ':focus': {
        borderWidth: 2,
        borderColor: 'none',
      },
    },
  }),

  size: {
    sm: {
      // padding: 4,
    },
    md: {
      padding: { base: 12, lg: 6 },
    },
  },
  variants: {
    borderless: (props) => ({
      field: {
        borderWidth: 0,
        borderColor: 'transparent',
        ':focus': {
          borderWidth: 0,
          borderColor: 'transparent',
        },
      },
    }),
    outline: (props) => ({
      field: {
        bg: "transparent",
        borderRadius: "12px",
      }
    }),
  },
  defaultProps: {
    size: 'md',
    variant: 'normal',
    colorScheme: (props) => props.theme.colors.primary,
  },
};
