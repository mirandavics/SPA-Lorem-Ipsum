import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    text: {
      primary: '#303030',
      secondary: 'white',
      disabled: '#d8d8d8',
    },
    primary: {
      light: '#7b68ee',
      main: '#9b33ed',
    },
  },
  typography: {
    fontFamily: ['Montserrat'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: 'white',
          position: 'inherit',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#eee',
          height: '24px',
          span: {
            backgroundColor: '#9b33ed',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiDrawer-paper': {
            width: '100%',
          },
        },
      },
    },
  },
});

export default theme;

declare module '@mui/material/styles' {
  interface Palette {
    light: Palette['primary'];
  }
  interface PaletteOptions {
    light?: PaletteOptions['primary'];
  }
}
