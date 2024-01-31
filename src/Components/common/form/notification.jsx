'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { Fade, useMediaQuery } from '@mui/material';

function Notification({ handleClose, open, text }) {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return (
    <Modal
      open={open}
      onClose={handleClose}
      disablePortal={true}
      sx={{ margin: '0 15px' }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: '#FF8115',
            border: '1px solid #FF8115',
            top: '50%',
            left: '50%',
            width: smUp ? '403px' : '320px',
            padding: '45px 18px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            maxWidth: '100%',
            outline: 'none',
          }}
        >
          <Button
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              position: 'absolute',
              top: '15px',
              right: '20px',
              padding: '0',
            }}
          >
            <Image
              src='/icons/close.svg'
              width={15}
              height={15}
              alt='закрыть'
            />
          </Button>
          <Box
            sx={{
              color: '#FFF',
              textAlign: 'center',
              fontSize: '18px',
              fontFamily: 'Manrope',
              fontStyle: 'normal',
              fontweight: 400,
              lineHeight: '130%',
              maxWidth: '100%',
            }}
            dangerouslySetInnerHTML={{ __html: text }}
          ></Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default Notification;
