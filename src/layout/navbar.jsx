"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";
import SidebarContext from "@/context/sidebar.context";
import LangSwitcher from "./langSwitcher";
import NavList from "./navList";

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
    <>
      <Box className={classes.navbarTop}>
        {mdUp && <LangSwitcher lng={lng} />}

        <Box className={classes.socialLinkBox}>
          <Link href={"/"} className={classes.socialLink}>
            telegram
          </Link>
          <Link href={"/"} className={classes.socialLink}>
            instagram
          </Link>
        </Box>
      </Box>
      <Box className={classes.navbar}>
        <Box className={classes.navbarWrapper}>
          <Link href={"/"} className={classes.footerImage}>
            <Image
              src={"/icons/logo.svg"}
              width={73}
              height={27}
              alt={"logo"}
              priority
              className={classes.navbarLogo}
            />
          </Link>
          <NavList lng={lng} />

          <Button className={classes.navbarBtn}>
            {t("оставить заявку")}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
