"use client";
import React from "react";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

function SliderItem({ lng, slider, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.sliderImgBox}>
      <Image
        src={slider.image}
        width={1160}
        height={580}
        alt={"slider-image"}
        priority
        className={classes.sliderImg}
      />

      <Box className={classes.sliderInfo}>
        <h2 className={classes.sliderTitle}>{t(slider.title)}</h2>
        <p className={classes.sliderText}>{t(slider.text)}</p>
      </Box>
    </Box>
  );
}

export default SliderItem;
