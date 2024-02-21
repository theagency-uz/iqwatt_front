"use client";
import { useTranslation } from "@/app/i18n/client";
import Form from "@/Components/common/form";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "./styles.module.css";

function FormContent({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);
  return (
    <Box className={classes.formContent}>
      <Box className={classes.formContentImgBox}>
        <Image
          src={"/static/site/form.webp"}
          width={570}
          height={597}
          alt={"image"}
          className={classes.formContentImg}
        />
      </Box>
      <Box className={classes.formContentInner}>
        <h4 className={classes.formContentTitle}>{t("Бесплатная консультация")}</h4>
        <Form lng={lng} />
      </Box>
    </Box>
  );
}

export default FormContent;
