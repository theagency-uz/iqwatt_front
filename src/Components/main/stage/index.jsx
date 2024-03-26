"use client";
import { Box, useMediaQuery } from "@mui/material";
import { register } from "swiper/element";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useRef, useState } from "react";
import { Scrollbar, Navigation } from "swiper/modules";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import CustomNavigation from "./CustomNavigation";
import StageItem from "./stageItem";
import stageData from "@/data/stageData";

function Stage({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const nextItemRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar, Navigation],
      slidesPerView: mdUp ? 1.5 : 1.2,
      spaceBetween: 20,
      scrollbar: { draggable: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        nextItemEl: nextItemRef.current,
        disabledClass: "disabled",
      },

      injectStyles: [],
    };
    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, [mdUp]);

  return (
    <Box className={classes.stage}>
      <Box className={classes.stageInner}>
        <Box className={classes.stageWrapper}>
          <Title title={t("5 этапов \n до нового \n уровня комфорта")} />
          <p className={classes.stageText}>
            {t(
              "Вся работа делится на 5 этапов - заявка, замеры и выбор схемы, подписание договора, установка и оплата. По окончанию всех работ мы также выдаем гарантию."
            )}
          </p>
          <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
        </Box>

        <Box className={classes.swiperWrapper}>
          <swiper-container
            ref={swiperRef}
            class={classes.mySwiper}
            init="false"
          >
            {stageData.map((stage, index) => {
              return (
                <swiper-slide key={stage.id} class={classes.swiperSlide}>
                  <StageItem
                    stage={stage}
                    nextItemRef={nextItemRef}
                    lng={lng}
                  />
                </swiper-slide>
              );
            })}
          </swiper-container>
        </Box>
      </Box>
    </Box>
  );
}

export default Stage;
