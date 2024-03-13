'use client';
import { Drawer, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import classes from './styles.module.css';

function SidebarDrawer({
  open,
  setOpen,
  children,
  isForm = false,
  hasClose = false,
  ...props
}) {
  return (
    <Drawer
      // disablePortal={true}
      anchor='right'
      onClose={() => setOpen(false)}
      open={open}
      sx={{ zIndex: isForm ? 15 : 12 }}
      className={classes.sidebar}
      variant='temporary'
    >
      {hasClose && (
        <Button
          onClick={(e) => setOpen(false)}
          sx={{
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          <CloseIcon sx={{ color: '#FF8115', fontSize: '30px' }} />
        </Button>
      )}
      {children}
    </Drawer>
  );
}

export default SidebarDrawer;
