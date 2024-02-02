"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import newsData from "@/data/newsData";
import Image from "next/image";

function ArticlesPage({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <ul className={classes.articlesList}>
      {newsData.map((news, index) => {
        return (
          <li key={news.id} className={classes.articlesItem}>
            <Image
              src={news.image}
              width={275}
              height={275}
              alt={"news-image"}
              className={classes.articlesImg}
            />
            <h3 className={classes.articlesTitle}>{t(news.title)}</h3>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesPage;
