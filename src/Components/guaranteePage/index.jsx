"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Contacts from "@component/main/contacts";
import InfoCard from "../common/infoCard";
import GuaranteeCard from "./guaranteeCard";

function GuaranteePage({ lng, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <>
      <Box className={classes.guaranteeInner}>
        <Box className={classes.guaranteeImgBox}>
          <Image
            src={"/static/site/guarantee-img.png"}
            width={570}
            height={385}
            alt={"image"}
            className={classes.guaranteeImg}
          />
        </Box>

        <Box className={classes.guaranteeInfo}>
          <h4 className={classes.guaranteeTitle}>{t("Гарантия до 25 лет")}</h4>
          <Box className={classes.guaranteeTextBox}>
            <p className={classes.guaranteeText}>
              {t(
                "Ко всем товарам, которые производятся под маркой IQWATT, приложен талон гарантии. Вы найдёте его в руководстве по эксплуатации на одной из последних страниц. "
              )}
            </p>
            <br />
            <p className={classes.guaranteeText}>
              {t(
                "Мы просим Вас внимательно ознакомиться с условиями, на которых мы предоставляем гарантию."
              )}
            </p>
          </Box>
        </Box>
      </Box>

      <InfoCard lng={lng} title={"IQ WATT - надежный выбор"} />
      <GuaranteeCard lng={lng} />
      <Contacts lng={lng} />
    </>
  );
}

export default GuaranteePage;
