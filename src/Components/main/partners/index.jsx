"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";

function Partners({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.partners}>
      <Box className={classes.partnersWrapper}>
        <Box className={classes.partnersInfo}>
          <Title title={"Партнерам"} />
          <p className={classes.partnersText}>
            {t(
              "Полное сопровождение проекта - фотоотчеты каждую неделю и выезды на стройку. Полное сопровождение проекта - фотоотчеты каждую неделю и выезды на стройку."
            )}
          </p>
          <Link href={"/"} className={classes.partnersLink}>
            {t("подробнее")}
          </Link>
        </Box>

        <Box className={classes.partnersImgBox}>
          {/* <Image
            src={"/static/site/craft-bottle.svg"}
            width={636}
            height={250}
            alt={"logo"}
            className={classes.partnersImg}
            priority
          /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Partners;
