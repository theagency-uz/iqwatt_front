"use client";
import { Box, useMediaQuery } from "@mui/material";
import { register } from "swiper/element";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useRef, useState } from "react";
import { Scrollbar, Navigation, Pagination } from "swiper/modules";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import CustomNavigation from "./CustomNavigation";
import SliderItem from "./sliderItem";
import sliderData from "@/data/sliderData";
import CustomPagination from "./CustomPagination";
import CustomScrollbar from "./CustomScrollbar";

function Slider({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar, Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      scrollbar: { el: scrollbarRef.current, draggable: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: "disabled",
      },
      pagination: {
        el: paginationRef.current,
        type: "fraction",
      },

      injectStyles: [],
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <Box className={classes.slider}>
      <swiper-container ref={swiperRef} class={classes.mySwiper} init="false">
        {sliderData.map((slider, index) => {
          return (
            <swiper-slide key={slider.id} class={classes.swiperSlide}>
              <SliderItem slider={slider} lng={lng} />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <Box className={classes.navigation}>
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
        <CustomScrollbar scrollbarRef={scrollbarRef} />
        <CustomPagination paginationRef={paginationRef} />
      </Box>
    </Box>
  );
}

export default Slider;
