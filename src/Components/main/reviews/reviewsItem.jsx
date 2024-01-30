"use client";
import React from "react";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function ReviewsItem({ lng, reviews, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Image
      src={reviews.image}
      width={275}
      height={412}
      alt={"reviews-image"}
      className={classes.reviewsImg}
    />
  );
}

export default ReviewsItem;
