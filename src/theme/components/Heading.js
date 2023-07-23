export const HeadingStyle = {
  baseStyle: () => ({
    fontSize: { base: "16px", lg: "1.2vw" },
  }),

  sizes: {
    md: {
      fontSize: "60px",
      fontWeight: "600",
      lineHeight: "72px",
      letterSpacing: "-0.04em",
    },
  },
  variants: {
    primary: (props) => ({
      fontWeight: "600",
      fontSize: "60px",
    }),
    secondary: (props) => ({
      color:
        props.colorMode === "dark"
          ? props.theme.colors.primary["dark"]
          : props.theme.colors.gray4,
      fontWeight: "600",
      fontSize: "41px",
    }),
    h1: (props) => ({
      fontWeight: 600,
      fontSize: "18px",
      color: "#383838",
    }),
    tertiary: (props) => ({
      color:
        props.colorMode === "dark"
          ? props.theme.colors.primary["dark"]
          : props.theme.colors.gray4,
      fontWeight: "600",
      fontSize: "36px",
    }),
    cardHeader: (props) => ({
      fontWeight: "700",
      fontSize: "18px",
      color: props.theme.colors.blue,
    }),
    defaultProps: {
      size: "md",
      variant: "primary",
    },
  },
  defaultProps: {},
};
