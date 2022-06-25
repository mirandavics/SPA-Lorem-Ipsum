import React from 'react';
import { ThemeProvider, CssBaseline, responsiveFontSizes } from '@mui/material';
import theme from '../assets/theme';
import Footer from '../components/footer';

const Template = ({ children }: any) => {
  const themeRespons = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={themeRespons}>
      <CssBaseline />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Template;
