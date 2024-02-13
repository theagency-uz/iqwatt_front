"use client";
import React from "react";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function PartnersItem({ lng, partners, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <>
      <Image
        src={partners.image}
        width={647}
        height={400}
        alt={"partners-image"}
        priority
        className={classes.partnersItemImg}
      />
      <p className={classes.partnersItemTitle}>{t(partners.title)}</p>
    </>
  );
}0

export default PartnersItem;
