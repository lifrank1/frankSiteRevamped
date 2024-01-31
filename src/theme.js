/*
 * Material UI has theming for its components that you can modify
 * We modify it by calling createTheme, passing in an object that represents the theme values that we are changing
 */

import { createTheme, responsiveFontSizes } from "@mui/material";

// https://mui.com/material-ui/customization/palette/
const PRIMARY_COLOR = '#BA0000';
const palletChanges = {
  primary: {
    500: PRIMARY_COLOR
  }
};


// https://mui.com/material-ui/customization/typography/
const headerOptions = {
  color: PRIMARY_COLOR,
  fontWeight: '800',
}
const typographyChanges = {
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
  }
}

export default responsiveFontSizes(createTheme({
  palette: palletChanges,
  typography: typographyChanges
}));