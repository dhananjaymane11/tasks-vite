import { RouterProvider } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { AuthProvider } from "../contexts/auth";
import { ErrorProvider } from "../contexts/error";
import { ToastProvider } from "../contexts/toast";
import router from "./router";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "5px 10px",
          minWidth: 0,
          textTransform: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AuthProvider>
        <ErrorProvider>
          <ToastProvider>
            <CssBaseline />
            <RouterProvider router={router} />
          </ToastProvider>
        </ErrorProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
