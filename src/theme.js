import { createTheme, responsiveFontSizes } from "@mui/material";

const PRIMARY_COLOR = '#BA0000';

const headerOptions = {
  color: PRIMARY_COLOR,
  fontWeight: '800',
}

export default responsiveFontSizes(createTheme({
  palette: {
    primary: {
      500: PRIMARY_COLOR
    }
  },
  typography: {
    fontFamily: [
      "'Open Sans', sans-serif",
    ],
    h1: {
      fontSize: '3.75rem',
      ...headerOptions
    },
    h2: {
      fontSize: '3.25rem',
      ...headerOptions
    },
    h3: {
      fontSize: '2.75rem',
      ...headerOptions
    },
    h4: {
      fontSize: '2.25rem',
      ...headerOptions
    },
    h5: {
      fontSize: '1.75rem',
      ...headerOptions
    },
    h6: {
      fontSize: '1.25rem',
      ...headerOptions
    },
    navbar: {
      fontWeight: '600',
    },
  }
}));