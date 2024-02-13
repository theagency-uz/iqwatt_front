"use client";
import { Box, useMediaQuery } from "@mui/material";
import { register } from "swiper/element";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useRef, useState } from "react";
import { Scrollbar, Navigation } from "swiper/modules";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import CustomNavigation from "./CustomNavigation";
import reviewsData from "@/data/reviewsData";
import ReviewsItem from "./reviewsItem";

function ReviewsDesk({ lng, ...props }) {
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
    <Box className={classes.reviews}>
      <Box className={classes.reviewsWrapper}>
        <Title title={"Портфолио работ"} lng={lng} />
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </Box>

      <Box className={classes.swiperWrapper}>
        <swiper-container ref={swiperRef} class={classes.mySwiper} init="false">
          {reviewsData.map((reviews, index) => {
            return (
              <swiper-slide key={reviews.id} class={classes.swiperSlide}>
                <ReviewsItem reviews={reviews} lng={lng} />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </Box>
    </Box>
  );
}

export default ReviewsDesk;
