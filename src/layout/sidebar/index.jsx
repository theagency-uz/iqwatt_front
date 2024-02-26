"use client";
import { Drawer } from "@mui/material";
import classes from "./styles.module.css";

function Sidebar({
  open,
  setOpen,
  children,
  isForm = false,
  ...props
}) {
  return (
    <Drawer
      // disablePortal={true}
      anchor="right"
      onClose={() => setOpen(false)}
      open={open}
      sx={{ zIndex: isForm ? 15 : 12 }}
      className={classes.sidebar}
      variant="temporary"
    >
      {children}
    </Drawer>
  );
}

export default Sidebar;
