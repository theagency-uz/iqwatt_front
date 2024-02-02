"use client";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./page.module.css";
import PartnersPage from "@/Components/partnersPage";

function PageWrapper({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box className={classes.partnersPage}>
      <PartnersPage lng={lng} />
    </Box>
  );
}

export default PageWrapper;
