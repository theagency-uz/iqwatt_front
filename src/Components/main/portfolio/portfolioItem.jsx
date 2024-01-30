"use client";
import React from "react";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function PortfolioItem({ lng, portfolio, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <>
    <Image
      src={portfolio.image}
      width={775}
      height={479}
      alt={"portfolio-image"}
      className={classes.portfolioImg}
    />
    <p className={classes.portfolioText}>{t(portfolio.text)}</p>
    </>
  );
}

export default PortfolioItem;
