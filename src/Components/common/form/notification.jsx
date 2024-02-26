"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Fade, useMediaQuery } from "@mui/material";
import classes from "./styles.module.css";

function Notification({ handleClose, open, text }) {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Modal open={open} onClose={handleClose} disablePortal={true}>
      <Fade in={open}>
        <Box className={classes.notifBox}>
          <Button onClick={handleClose} className={classes.notifBtn}>
            <Image
              src="/icons/close.svg"
              width={15}
              height={15}
              alt="закрыть"
            />
          </Button>
          <Box
            className={classes.notifText}
            dangerouslySetInnerHTML={{ __html: text }}
          ></Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default Notification;
