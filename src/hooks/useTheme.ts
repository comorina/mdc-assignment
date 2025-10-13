import { useMemo, useEffect } from 'react';
import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { type RootState } from '../storeManagement/store';

export const useTheme = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  // Apply background color to body and root elements
  useEffect(() => {
    const body = document.body;
    const root = document.getElementById('root');
    
    if (mode === 'dark') {
      body.style.backgroundColor = '#121212';
      body.style.color = '#ffffff';
      if (root) {
        root.style.backgroundColor = '#121212';
        root.style.color = '#ffffff';
      }
    } else {
      body.style.backgroundColor = '#f5f5f5';
      body.style.color = '#212121';
      if (root) {
        root.style.backgroundColor = '#f5f5f5';
        root.style.color = '#212121';
      }
    }
  }, [mode]);

  const theme = useMemo(() => {
    const themeOptions: ThemeOptions = {
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // Light mode colors
              primary: {
                main: '#1976d2',
                light: '#42a5f5',
                dark: '#1565c0',
              },
              secondary: {
                main: '#dc004e',
              },
              background: {
                default: '#f5f5f5',
                paper: '#ffffff',
              },
              text: {
                primary: '#212121',
                secondary: '#616161',
              },
            }
          : {
              // Dark mode colors
              primary: {
                main: '#90caf9',
                light: '#e3f2fd',
                dark: '#42a5f5',
              },
              secondary: {
                main: '#f48fb1',
              },
              background: {
                default: '#121212',
                paper: '#1e1e1e',
              },
              text: {
                primary: '#ffffff',
                secondary: '#b0b0b0',
              },
            }),
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              ...(mode === 'dark' && {
                backgroundColor: '#2d2d2d',
                border: '1px solid #404040',
              }),
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              ...(mode === 'dark' && {
                backgroundColor: '#1e1e1e',
              }),
            },
          },
        },
      },
    };

    return createTheme(themeOptions);
  }, [mode]);

  return theme;
};
