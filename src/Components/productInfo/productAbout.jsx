"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";

function ProductAbout({
  lng,
  series,
  packaging,
  weight,
  length,
  sectionPower,
  pipelinePower,
  mounting,
  cableType,
  category,
  ...props
}) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <ul className={classes.productList}>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Серия")}:</span>
        <span className={classes.productAbout}>{t(series)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Размеры упаковки")}:</span>
        <span className={classes.productAbout}>{t(packaging)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Вес")}:</span>
        <span className={classes.productAbout}>{t(weight)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Длина")}:</span>
        <span className={classes.productAbout}>{t(length)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Мощность секции, Вт")}:</span>
        <span className={classes.productAbout}>{t(sectionPower)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>
          {t("Мощность при монтаже снаружи трубопровода, Вт/м")}:
        </span>
        <span className={classes.productAbout}>{t(pipelinePower)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Монтаж")}:</span>
        <span className={classes.productAbout}>{t(mounting)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Тип кабеля")}:</span>
        <span className={classes.productAbout}>{t(cableType)}</span>
      </li>
      <li className={classes.productItem}>
        <span className={classes.productDesc}>{t("Категория")}:</span>
        <span className={classes.productAbout}>{t(category)}</span>
      </li>
    </ul>
  );
}

export default ProductAbout;
