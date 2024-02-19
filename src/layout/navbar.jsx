"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";
import SidebarContext from "@/context/sidebar.context";
import FormContext from "@/context/form.context";
import LangSwitcher from "./langSwitcher";
import NavList from "./navList";
import MenuIcon from "./menuIcon";
// import dynamic from "next/dynamic";

// const LangSwitcher = dynamic(() => import("./langSwitcher"), { ssr: false });

function Navbar({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { form, setForm } = useContext(FormContext);
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
      {mdUp && (
        <Box className={classes.navbarTop}>
          <LangSwitcher lng={lng} />

          <Box className={classes.socialLinkBox}>
            <a
              href={"https://t.me/uz_iqwatt"}
              className={classes.socialLink}
              target="_blank"
            >
              telegram
            </a>
            <a
              href={"https://www.instagram.com/iqwatt"}
              className={classes.socialLink}
              target="_blank"
            >
              instagram
            </a>
          </Box>
        </Box>
      )}

      <Box className={classes.navbar}>
        <Box className={classes.navbarWrapper}>
          <Link href={"/"} className={classes.navbarImage}>
            <Image
              src={"/icons/logo.svg"}
              width={73}
              height={27}
              alt={"logo"}
              priority
              className={classes.navbarLogo}
            />
          </Link>

          {mdUp ? (
            <>
              <NavList lng={lng} setOpen={setOpen} />

              <Button
                className={classes.navbarBtn}
                onClick={() => setForm({ open: true })}
                disableRipple={true}
              >
                {t("оставить заявку")}
              </Button>
            </>
          ) : (
            <MenuIcon />
          )}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
