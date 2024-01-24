"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";
import SidebarContext from "@/context/sidebar.context";
import LangSwitcher from "./langSwitcher";

function Navbar({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { open, setOpen } = useContext(SidebarContext);
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className={classes.navbar}>
      <h1>Navbar</h1>

      {mdUp && <LangSwitcher lng={lng} />}
    </Box>
  );
}

export default Navbar;
