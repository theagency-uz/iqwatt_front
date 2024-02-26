"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Box, useMediaQuery, Fade, Modal, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import ModalContent from "./modalContent";

function ReviewsItem({ lng, videos, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);
  const videoRef = useRef();

  const [modal, setModal] = useState({ open: false, id: null });
  const [stop, setStop] = useState(false);

  const handleVideo = () => {
    setStop(!stop);
    if (stop === true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <>
      <Box className={classes.sliderVideoBox}>
        <video
          ref={videoRef}
          src={videos.video}
          poster={videos.poster}
          type="video/mp4"
          onClick={(e) => {
            setModal({ open: true, id: videos.id });
          }}
          className={classes.sliderVideo}
        />

        <Button
          className={classes.videoBtn}
          // onClick={handleVideo}
          onClick={(e) => {
            setModal({ open: true, id: videos.id });
          }}
          sx={{ display: "flex" }}
        >
          <PlayArrowIcon style={{ color: "#fff", fontSize: "50px" }} />
        </Button>
      </Box>

      <ModalContent
        id={modal.id}
        open={modal.open}
        setOpen={(v) =>
          setModal((m) => {
            return { ...m, open: v };
          })
        }
        lng={lng}
      />
    </>
  );
}

export default ReviewsItem;
