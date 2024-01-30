"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";

const infoData = [
  { number: "10", text: "лет на международном рынке" },
  { number: "100+", text: "установленных систем" },
  { number: "10", text: "лет на международном рынке" },
  { number: "100+", text: "установленных систем" },
];

function Info({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.info}>
      <Box className={classes.infoWrapper}>
        <Title title={"IQ WATT -- разумный подход \n к теплу в вашем доме"} lng={lng} />
        <span className={classes.border}></span>
        <p className={classes.infoText}>
          {t(
            "Равномерное распределение тепла по всей площади для комфортного и здорового проживания."
          )}
        </p>
      </Box>

      <ul className={classes.infoList}>
        {infoData.map((item, index) => {
          return (
            <li className={classes.infoItem} key={index}>
              <p className={classes.infoNumber}>{item.number}</p>
              <p className={classes.infoItemText}>{t(item.text)}</p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default Info;
