"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import { Scrollbar, Navigation } from "swiper/modules";
import { register } from "swiper/element";
import CustomNavigation from "./CustomNavigation";

function ProductImages({ productImage, ...props }) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [images, setImages] = useState(productImage);

  useEffect(() => {
    setImages(productImage);
  }, [productImage]);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar, Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
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
  }, [images]);

  return (
    <Box className={classes.productImages}>
      <swiper-container
        init="false"
        ref={swiperRef}
        class={classes.productMainSwiper}
      >
        {images.map((image, index) => {
          return (
            <swiper-slide class={classes.productMainSwiperItem} key={index}>
              <Image
                src={image}
                width={570}
                height={533}
                alt={"Product image"}
                className={classes.productMainImg}
              />
            </swiper-slide>
          );
        })}
      </swiper-container>
      <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
    </Box>
  );
}

export default ProductImages;
