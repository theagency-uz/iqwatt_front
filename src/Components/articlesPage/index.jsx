"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import newsData from "@/data/newsData";
import Image from "next/image";
import Link from "next/link";

function ArticlesPage({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <ul className={classes.articlesList}>
      {newsData.map((news, index) => {
        return (
          <li key={news.id}>
            <Link href={"/"} className={classes.articlesItem}>
              <Image
                src={news.image}
                width={275}
                height={275}
                alt={"news-image"}
                className={classes.articlesImg}
              />
              <h3 className={classes.articlesTitle}>{t(news.title)}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticlesPage;
