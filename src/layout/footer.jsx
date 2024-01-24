"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function Footer({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className={classes.footer}>
      <Box className={classes.footerWrapper}>
        <ul className={classes.footerList}>
          <li className={classes.footerItem}>
            <Link href={"/"}>{t("Каталог")}</Link>
          </li>
          <li className={classes.footerItem}>
            <Link href={"/"}>{t("Каталог")}</Link>
          </li>
          <li className={classes.footerItem}>
            <Link href={"/"}>{t("Каталог")}</Link>
          </li>
        </ul>
        <button onClick={goToTop} className={classes.footerImage}>
          <Image
            src={"/icons/logo.svg"}
            width={159}
            height={49}
            alt={"logo"}
            priority
            className={classes.footerLogo}
          />
        </button>

        <Box className={classes.footerNumbersBox}>
          <Link
            href={"tel: +998 94 678 67 78"}
            className={classes.number}
          >
            +998 94 678 67 78
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
