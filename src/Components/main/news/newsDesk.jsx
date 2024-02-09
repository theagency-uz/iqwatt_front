"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";
import { register } from "swiper/element";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useRef, useState } from "react";
import { Scrollbar, Navigation } from "swiper/modules";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import CustomNavigation from "./CustomNavigation";
import NewsItem from "./newsItem";
import newsData from "@/data/newsData";

function NewsDesk({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar, Navigation],
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      scrollbar: { draggable: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: "disabled",
      },

      injectStyles: [],
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <Box className={classes.news}>
      <Box className={classes.newsWrapper}>
        <Title title={"Новости и статьи"} lng={lng} />
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </Box>

      <Box className={classes.swiperWrapper}>
        <swiper-container ref={swiperRef} class={classes.mySwiper} init="false">
          {newsData.map((news, index) => {
            return (
              <swiper-slide key={news.id} class={classes.swiperSlide}>
                <NewsItem news={news} lng={lng} />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </Box>

      <Box className={classes.newsBox}>
        <Link href={"/articles"} className={classes.newsLink}>
          {t("смотреть всё")}
          <Box className={classes.newsIconBox}>
            <Image
              src={"/icons/arrow-right.svg"}
              width={18}
              height={15}
              alt={"icon"}
              className={classes.newsIcon}
            />
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default NewsDesk;
