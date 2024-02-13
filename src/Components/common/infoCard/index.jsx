"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import classes from "./styles.module.css";
import infoCardData from "@/data/infoCardData";

function InfoCard({ lng, title, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box className={classes.card}>
      <h3 className={classes.cardTitle}>{t(title)}</h3>

      <ul className={classes.cardList}>
        {infoCardData.map((card, index) => {
          return (
            <li key={card.id} className={classes.cardItem}>
              <Box className={classes.cardIconBox}>
                <Image
                  src={card.step}
                  width={80}
                  height={20}
                  alt={"icon-staps"}
                  className={classes.cardStep}
                />

                <Image
                  src={card.icon}
                  width={38}
                  height={38}
                  alt={"icon"}
                  className={classes.cardIcon}
                />
              </Box>

              <Box className={classes.cardInfo}>
                <h4 className={classes.cardInfoTitle}>{t(card.title)}</h4>
                <p className={classes.cardInfoText}>{t(card.text)}</p>
              </Box>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default InfoCard;
