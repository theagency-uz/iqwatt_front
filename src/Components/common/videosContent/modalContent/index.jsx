'use client';
import { Box, Button, Fade, Modal, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import classes from '../styles.module.css';

import { useState } from 'react';
import videosData from '@/data/videosData';
import { useTranslation } from '@/app/i18n/client';

function ModalContent({ open, setOpen, video, lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  if (!video) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      // disablePortal={true}
    >
      <Box className={classes.modalContentBox}>
        <Fade in={open}>
          <Box className={classes.modalContent}>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              className={classes.modalContentBtn}
            >
              <CloseIcon className={classes.modalContentIcon} />
            </Button>
            <video
              // ref={videoRef}
              src={video}
              // poster={videoContent.poster}
              type='video/mp4'
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
