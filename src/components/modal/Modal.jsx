import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

import { ModalContent, ChildrenWrapper } from "./Modal.style";

const Modal = ({ showModal, setShowModal, title, children }) => {
  return (
    <Drawer
      anchor="bottom"
      open={showModal}
      onClose={() => setShowModal(false)}
    >
      <ModalContent>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: "10px" }}>
          {title}
        </Typography>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </ModalContent>
    </Drawer>
  );
};

export default Modal;
