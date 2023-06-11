import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialiasad",
    backgroundColor: "$purple900",
    color: "$text",
    minHeight: "100vh",
    fontWeight: "300",
    padding: "30px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "16px",
    overflowX: "hidden",
    backgroundImage: `url("https://i.imgur.com/u6K3VPF.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    '&::-webkit-scrollbar': {
      width: '8px',
    },

    '&::-webkit-scrollbar-track': {
      borderRadius: '15px',
      backgroundColor: 'none',
      marginBlock: '.5em'
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$primary',
      borderRadius: '15px',
    },

  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": { scrollBehavior: "auto" },
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },

});
