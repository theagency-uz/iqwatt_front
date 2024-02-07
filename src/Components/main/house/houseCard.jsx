"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";

import classes from "./styles.module.css";

function HouseCard({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.card}>
      <Box className={classes.cardImgBox}>
        <Image
          src={"/static/site/card-img.png"}
          width={197}
          height={116}
          alt={"house-image"}
          className={classes.cardImg}
        />
      </Box>
      <Box className={classes.cardWrapper}>
        <h3 className={classes.cardTitle}>{t("IQ Roof")}</h3>
        <p className={classes.cardText}>
          {t(
            "Заключим договор поставки и разделим оплату на две равные части, которые можно оплатить удобным для вас способом."
          )}
        </p>
      </Box>
    </Box>
  );
}

export default HouseCard;
