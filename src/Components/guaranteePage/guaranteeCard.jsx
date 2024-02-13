"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function GuaranteeCard({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box className={classes.cardWrapper}>
      <h2 className={classes.cardTitle}>
        {t("Регистрация гарантийного талона")}
      </h2>

      <ul className={classes.cardList}>
        <li className={classes.cardItem}>
          <Box className={classes.cardIconBox}>
            <Image
              src={"/icons/guarant-step.svg"}
              width={50}
              height={20}
              alt={"icon-staps"}
              className={classes.cardStep}
            />
          </Box>
          <Box className={classes.cardInner}>
            <h3 className={classes.cardItemTitle}>
              {t("Авторизуйтесь в Telegram")}
            </h3>
            <p
              className={classes.cardText}
              style={{ maxWidth: mdUp ? "21.1vw" : "100%" }}
            >
              {t(
                "После проверки отправленных вами файлов, мы оповестим вас о регистрации гарантии."
              )}
            </p>
            <div></div>
          </Box>
        </li>
        <li className={classes.cardItem}>
          <Box className={classes.cardIconBox}>
            <Image
              src={"/icons/guarant-step2.svg"}
              width={50}
              height={20}
              alt={"icon-staps"}
              className={classes.cardStep}
            />
          </Box>
          <Box className={classes.cardInner}>
            <h3 className={classes.cardItemTitle}>
              {t("Отправьте две фотографии:")}
            </h3>
            <Box className={classes.cardBox}>
              <p className={classes.cardText}>
                {t("По кнопке ниже прикрепите две фотографии:")}
              </p>

              <Box className={classes.cardBoxWrapper}>
                <Image
                  src={"/icons/training-icon.svg"}
                  width={17}
                  height={17}
                  alt={"icon"}
                  className={classes.cardCircleIcon}
                />
                <p className={classes.cardText}>
                  {t("фотографию заполненного монтажником гарантийного талона")}
                </p>
              </Box>
              <Box className={classes.cardBoxWrapper}>
                <Image
                  src={"/icons/training-icon.svg"}
                  width={17}
                  height={17}
                  alt={"icon"}
                  className={classes.cardCircleIcon}
                />
                <p className={classes.cardText}>
                  {t("фотографию выполненной работы")}
                </p>
              </Box>
            </Box>
          </Box>
        </li>
      </ul>

      <p className={classes.cardDesc}>{t("После проверки мы пришлем вам сообщение, подтверждающее, что гарантия зарегистрирована.")}</p>
    </Box>
  );
}

export default GuaranteeCard;
