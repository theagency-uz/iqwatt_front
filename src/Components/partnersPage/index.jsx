"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import newsData from "@/data/newsData";
import Image from "next/image";
import Link from "next/link";
import Contacts from "../main/contacts";
import Reviews from "../main/reviews";

function PartnersPage({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <>
      <Box className={classes.partnersInner}>
        <Box className={classes.partnersImgBox}>
          <Image
            src={"/static/site/partner-img.png"}
            width={570}
            height={385}
            alt={"image"}
            className={classes.partnersImg}
          />
        </Box>

        <Box className={classes.partnersInfo}>
          <h4 className={classes.partnersTitle}>{t("Партнерам")}</h4>
          <Box className={classes.partnersTextBox}>
            <p className={classes.partnersText}>
              {t(
                "IQWATT сформировал команду целеустремлённых людей, отладил систему поставок, создал высокую культуру партнёрских отношений. Мы сконцентрированы на том, чтобы идти у к успеху совместно с нашими партнёрами."
              )}
            </p>
            <br />
            <p className={classes.partnersText}>
              {t(
                "Приглашаем торговые компании, заинтересованные в нашем продукте, а также дизайнерам помещений, строительным бригадам, профессиональным электрикам."
              )}
            </p>
            <br />
            <p className={classes.partnersText} style={{ color: "#000" }}>
              {t(
                "Для наших Партнёров мы разработали особую Программу лояльности IQWATT, предусматривающую специальные финансовые условия, скидки и бонусы"
              )}
            </p>
          </Box>
        </Box>
      </Box>
      
      <Reviews lng={lng} />
      <Contacts lng={lng} />
    </>
  );
}

export default PartnersPage;
