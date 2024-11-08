import { createTheme } from '@mui/material';

export const bcpTheme = createTheme({
  typography: {
    fontFamily: "Flexo, Arial", // reemplaza 'TuFuente' con el nombre de tu fuente
  },
  palette: {
    primary: {
      main: "#126c63",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5cc2b6",
      contrastText: "#fff",
    },
    error: {
      main: "#f67185",
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(7, 78, 140, 0.1)",
            color: "black",
          },
          "&.Mui-selected": {
            backgroundColor: "#126c63",
            color: "white",
            borderRadius: "0 30px 30px 0",
          },
          "&.Mui-selected .MuiListItemIcon-root": {
            color: "white",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#1b877c",
            color: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedSecondary": {
            "&:focus": {
              backgroundColor: "#126c63",
              outline: "none",
            },
            "&:hover": {
              backgroundColor: "#126c63", // color cuando el botón está enfocado
            },
            "&:active": {
              backgroundColor: "#5cc2b6",
              boxShadow: "none", // color cuando el botón está activo (siendo presionado)
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.MuiIconButton-root": {
            "&:focus": {
              outline: "none", // color cuando el mouse está sobre el botón
            },
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiButtonBase-root": {
            "&:focus": {
              outline: "none", // color cuando el mouse está sobre el botón
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "rgb(128,128,128, 0.05)",
            width: "8px",
            height: "5px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "rgb(128,128,128, 0.3)",
            minHeight: 24,
            // border: "3px solid #9760A6",
          },
        },
      },
    },
  },
});