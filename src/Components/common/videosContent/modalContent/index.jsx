"use client";
import { Box, Button, Fade, Modal, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "../styles.module.css";

import { useState } from "react";
import videosData from "@/data/videosData";
import { useTranslation } from "@/app/i18n/client";

function ModalContent({ open, setOpen, lng, id, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const videoContent = videosData.find((d) => d.id === id);

  if (!videoContent) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      // disablePortal={true}
    >
      <Box
        sx={{
          // userSelect: "none",
          // pointerEvents: "none",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
          // backgroundColor: "#000",
          padding: "30px 0px"
        }}
      >
        <Fade in={open}>
          <Box className={classes.modalContent}>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              sx={{
                padding: "0",
                pointerEvents: "auto",
                borderRadius: "0",
                minWidth: "auto",
                position: "absolute",
                top: mdUp ? "20px" : "15px",
                right: mdUp ? "30px" : "10px",
              }}
            >
              <CloseIcon
                sx={{ color: "#cbcbcb", fontSize: mdUp ? "2.5rem" : "2rem" }}
              />
            </Button>
            <video
              // ref={videoRef}
              src={videoContent.video}
              // poster={videoContent.poster}
              type="video/mp4"
              // onClick={handleVideo}
              className={classes.modalVideo}
              controls
              autoPlay
            />
          </Box>
        </Fade>
      </Box>
    </Modal>
  );
}

export default ModalContent;
