"use client";
import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import classes from "./styles.module.css";
import { register } from "swiper/element";
import { Scrollbar } from "swiper/modules";
import partnersData from "@/data/partnersData";
import PartnersItem from "./partnersItem";

function SliderDesk({ lng, ...props }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar],
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      scrollbar: { draggable: true },

      injectStyles: [],
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <Box className={classes.swiperWrapper}>
      <swiper-container ref={swiperRef} class={classes.mySwiper} init="false">
        {partnersData.map((partners, index) => {
          return (
            <swiper-slide key={partners.id} class={classes.swiperSlide}>
              <PartnersItem partners={partners} lng={lng} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </Box>
  );
}

export default SliderDesk;
