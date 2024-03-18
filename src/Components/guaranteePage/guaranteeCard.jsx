"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";

function GuaranteeCard({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box className={classes.cardWrapper}>
      <Box className={classes.cardTextBox}>
        <h2 className={classes.cardTitle}>
          {t("Регистрация гарантийного талона")}
        </h2>
        <p
          className={classes.cardText}
          style={{ maxWidth: mdUp ? "27vw" : "100%" }}
        >
          {t(
            "Для регистрации гарантии напишите нашему менеджеру в Telegram и пришлите нам две фотографии."
          )}
        </p>
      </Box>

      <Box className={classes.cardItem}>
        <Box className={classes.cardInner}>
          <h3 className={classes.cardItemTitle}>
            {t("Отправьте две фотографии нам в Telegram")}
          </h3>
          <Box className={classes.cardBox}>
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

          <Box className={classes.uploadBox}>
            <a href={"/"} className={classes.uploadBtn} target="_blank">
              telegram
              <Box className={classes.uploadIconBox}>
                <Image
                  src={"/icons/telegram-icon.svg"}
                  width={33}
                  height={33}
                  alt={"icon"}
                  className={classes.contactsIcon}
                />
              </Box>
            </a>

            <p className={classes.cardDesc}>
              {t(
                "После проверки отправленных вами файлов, мы оповестим вас о регистрации гарантии."
              )}
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GuaranteeCard;
