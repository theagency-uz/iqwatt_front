"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import HouseCard from "./houseCard";

const houseData = [
  {
    icon: "/icons/wrench.svg",
    title: "Грамотный монтаж",
    text: "Для нас важен качественный сервис и мы доверяем монтаж систем, только мастерам, прошедшим наше обучение.",
  },
  {
    icon: "/icons/safety.svg",
    title: "Канадские стандарты качества",
    text: "Вся наша продукция - сертифицирована по жестким стандартам, электро- и пожаробезопасна.",
  },
  {
    icon: "/icons/money-icon.svg",
    title: "Экономичность",
    text: "Умные система автоматически отключают нагрев при достижении установленной температуры, снижая расход электроэнергии.",
  },
];

function House({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.house}>
      <HouseCard lng={lng} />
      
      <ul className={classes.houseList}>
        {houseData.map((house, index) => {
          return (
            <li className={classes.houseItem} key={index}>
              <Box className={classes.houseWrapper}>
                <Box className={classes.houseImgBox}>
                  <Image
                    src={house.icon}
                    width={38}
                    height={38}
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
