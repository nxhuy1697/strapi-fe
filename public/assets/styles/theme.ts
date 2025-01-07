import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#1f2122', // Nền mặc định toàn trang
      paper: '#27292a',   // Nền cho các box
    },
    text: {
      primary: '#ffffff', // Màu chữ chính
    },
    primary: {
      main: '#e75e8d', // Màu chính
    },
    secondary: {
      main: '#666', // Màu phụ
    },
  },
  typography: {
    fontFamily: `'Helvetica Neue', 'Roboto', 'Arial', sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px', 
          textTransform: 'capitalize', 
          fontSize: '1rem',
        },
        containedPrimary: {
          backgroundColor: 'primary', 
          color: '#fff',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#f99'
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#27292a', // Nền của các Paper
          borderRadius: '8px',
          padding: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
});

export default theme;
