"use client";
import { Modal } from "@mui/material";


function ModalContent({ open, setOpen, children }) {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      {children}
    </Modal>
  );
}

export default ModalContent;
