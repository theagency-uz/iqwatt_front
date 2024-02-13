"use client";
import { Drawer } from "@mui/material";

function Sidebar({
  open,
  setOpen,
  children,
  isForm = false,
  maxWidth = "600px",
  ...props
}) {
  return (
    <Drawer
      // disablePortal={true}
      anchor="right"
      onClose={() => setOpen(false)}
      open={open}
      PaperProps={{
        sx: {
          background: "#F8F8F8",
          color: "#F8F8F8",
          // maxWidth: "400px",
          width: "100%",
          maxWidth: maxWidth,
        },
      }}
      sx={{ zIndex: isForm ? 15 : 12 }}
      variant="temporary"
    >
      {children}
    </Drawer>
  );
}

export default Sidebar;
