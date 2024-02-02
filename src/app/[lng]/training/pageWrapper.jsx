"use client";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./page.module.css";
import TrainingPage from "@/Components/trainingPage";

function PageWrapper({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box className={classes.trainingPage}>
      <Box className={classes.trainingWrapper}>
        <Title title={"Центр обучения"} lng={lng} />
        <span className={classes.border}></span>
        <p className={classes.trainingText}>
          {t(
            "Инструкции и учебные статьи для партнеров, монтажников  и дизайнеров."
          )}
        </p>
      </Box>

      <TrainingPage lng={lng} />
    </Box>
  );
}

export default PageWrapper;
