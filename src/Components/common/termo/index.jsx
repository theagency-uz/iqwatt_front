"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function Termo({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box className={classes.termo}>
      <Box className={classes.termoImgBox}>
        <Image
          src={"/static/site/termo.png"}
          width={570}
          height={382}
          alt={"catalog-image"}
          className={classes.termoImg}
        />
      </Box>

      <Box className={classes.termoWrapper}>
        <Box className={classes.termoInfo}>
          <h3 className={classes.termoTitle}>{t("Термостаты")}</h3>
          <p className={classes.termoText}>
            {t(
              "Для регулирования работы систем также необходим термостат. В нашем ассортименте есть термостаты разной стилистики и функционала."
            )}
          </p>
        </Box>
        <Link href={"/"} className={classes.termoLink}>
          {t("смотреть")}
          <Box className={classes.termoIconBox}>
            <Image
              src={"/icons/arrow-right.svg"}
              width={18}
              height={15}
              alt={"icon"}
              className={classes.termoIcon}
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default Termo;
