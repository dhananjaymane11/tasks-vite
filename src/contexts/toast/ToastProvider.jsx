import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

import { ToastContext } from "./ToastContext";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export function ToastProvider({ children }) {
  const [toastMessage, setToastMessage] = useState("");

  const handleClose = () => {
    setToastMessage("");
  };

  return (
    <ToastContext value={{ setToastMessage }}>
      {children}

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={5000}
        open={!!toastMessage}
        onClose={handleClose}
        slots={{ transition: SlideTransition }}
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "white" }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </ToastContext>
  );
}
