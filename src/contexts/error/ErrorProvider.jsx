import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useAuth } from "../auth";
import { Modal } from "../../components";
import { ErrorContext } from "./ErrorContext";

export function ErrorProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const { removeTokenFromContext } = useAuth();

  const showErrorPopup = (val) => setShowModal(val);

  return (
    <ErrorContext value={{ showErrorPopup }}>
      {children}

      <Modal showModal={showModal} title={"Error"}>
        <div>
          <Typography variant="p">
            Something went wrong. Please try again after some time.
          </Typography>
        </div>
        <Button
          variant="contained"
          sx={{ mt: "20px", width: 120 }}
          onClick={() => {
            removeTokenFromContext();
            setShowModal(false);
          }}
        >
          Exit
        </Button>
      </Modal>
    </ErrorContext>
  );
}
