"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";

const houseData = [
  {
    icon: "/icons/wrench.svg",
    title: "Поможем с выбором и установкой",
    text: "Грамотно рассчитаем, правильно установим, доступно обьясним",
  },
  {
    icon: "/icons/star.svg",
    title: "Гарантия 25 лет",
    text: "Гарантия 25 лет, срок службы 50 лет, Производство - Канада",
  },
  {
    icon: "/icons/safety.svg",
    title: "Безопасность",
    text: "Электро- и пожаробезопасно Вся продукция - сертифицирована.",
  },
];

function House({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.house}>
      <ul className={classes.houseList}>
        {houseData.map((house, index) => {
          return (
            <li className={classes.houseItem} key={index}>
              <Box className={classes.houseWrapper}> 
                <Box className={classes.houseImgBox}>
                  <Image
                    src={house.icon}
                    width={24}
                    height={24}
                    alt={"icon"}
                    className={classes.houseIcon}
                  />
                </Box>

                <h3 className={classes.houseTitle}>{t(house.title)}</h3>
              </Box>
              <p className={classes.houseText}>{t(house.text)}</p>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default House;
