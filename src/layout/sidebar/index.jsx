"use client";
import { Drawer } from "@mui/material";

function Sidebar({ open, setOpen, children, maxWidth = "600px", ...props }) {
  return (
    <Drawer
      // disablePortal={true}
      anchor="right"
      onClose={() => setOpen(false)}
      open={open}
      PaperProps={{
        sx: {
          background: "#fff",
          color: "#fff",
          // maxWidth: "400px",
          width: "100%",
          maxWidth: maxWidth,
        },
      }}
      sx={{ zIndex: 12 }}
      variant="temporary"
    >
      {children}
    </Drawer>
  );
}

export default Sidebar;
