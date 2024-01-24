"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";

function Contacts({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.contacts}>
      <Box className={classes.contactsWrapper}>
        <Title title={"Свяжитесь \n с нами"} />

        <Box className={classes.contactsInfo}>
          <p className={classes.contactsText}>
            {t(
              "Полное сопровождение проекта - фотоотчеты каждую неделю и выезды на стройку."
            )}
          </p>
          <Link href={"/"} className={classes.contactsLink}>
            {t("подробнее")}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;
