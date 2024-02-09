"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import newsData from "@/data/newsData";
import Image from "next/image";
import Link from "next/link";

function TrainingPage({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box className={classes.trainingWrapper}>
      <Box className={classes.trainingBox}>
        <h4 className={classes.trainingTitle}>{t("Статьи")}:</h4>

        <ul className={classes.trainingList}>
          <li className={classes.trainingItem}>
            <Box className={classes.trainingInner}>
              <Image
                src={"/icons/training-icon.svg"}
                width={17}
                height={17}
                alt={"icon"}
                className={classes.trainingCircleIcon}
              />
              <p className={classes.trainingText}>
                {t("Как выбрать теплый пол")}
              </p>
            </Box>
          </li>
        </ul>
      </Box>
      <Box className={classes.trainingBox}>
        <h4 className={classes.trainingTitle}>{t("Инструкции")}:</h4>

        <ul className={classes.trainingList}>
          <li className={classes.trainingItem}>
            <Box className={classes.trainingInner}>
              <Image
                src={"/icons/training-icon.svg"}
                width={17}
                height={17}
                alt={"icon"}
                className={classes.trainingCircleIcon}
              />
              <p className={classes.trainingText}>
                {t("Как выбрать теплый пол")}
              </p>
            </Box>

            <a
              href="./directory/yourfile.pdf"
              download="newfilename"
              className={classes.trainingLink}
            >
              <span>
                {t("скачать")}
              </span>
              <Box className={classes.trainingIconBox}>
                <Image
                  src={"/icons/arrow-right-white.svg"}
                  width={15}
                  height={13}
                  alt={"icon"}
                  className={classes.trainingIcon}
                />
              </Box>
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default TrainingPage;
