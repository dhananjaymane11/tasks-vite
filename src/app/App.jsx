import { RouterProvider } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { AuthProvider } from "./AuthProvider";
import { ErrorProvider } from "./ErrorProvider";
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
          <CssBaseline />
          <RouterProvider router={router} />
        </ErrorProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
