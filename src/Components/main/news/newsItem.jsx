"use client";
import React from "react";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

function NewsItem({ lng, news, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Link href={"/"} className={classes.swiperSlide}>
      <Image
        src={news.image}
        width={275}
        height={275}
        alt={"news-image"}
        className={classes.newsImg}
      />
      <h3 className={classes.newsTitle}>{t(news.title)}</h3>
    </Link>
  );
}

export default NewsItem;
