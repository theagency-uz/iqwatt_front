"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { register } from "swiper/element";

function ProductImages({ productImage, ...props }) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const swiperRef = useRef(null);
  const swiperThumbRef = useRef(null);
  const [images, setImages] = useState(productImage);

  useEffect(() => {
    setImages(productImage);
  }, [productImage]);

  useEffect(() => {
    register();

    const params = {
      spaceBetween: 20,
      thumbs: { swiper: swiperThumbRef.current },
      modules: [FreeMode, Navigation, Thumbs],
      // autoHeight: true,
      loop: true,
    };

    const paramsThumb = {
      spaceBetween: 15,
      slidesPerView: 3,
      freeMode: true,
      loop: true,
      watchSlidesProgress: true,
      modules: [FreeMode, Navigation, Thumbs],
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);
    // Assign it to swiper element
    Object.assign(swiperThumbRef.current, paramsThumb);

    // initialize swiper
    swiperRef.current.initialize();
    swiperThumbRef.current.initialize();
  }, [productImage]);

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
                height={458}
                alt={"Product image"}
                className={classes.productMainImg}
              />
            </swiper-slide>
          );
        })}
      </swiper-container>

      <swiper-container
        init="false"
        ref={swiperThumbRef}
        class={classes.productBottomSwiper}
      >
        {images.map((image, index) => {
          return (
            <swiper-slide class={classes.productBottomSwiperItem} key={index}>
              <Image
                src={image}
                width={65}
                height={65}
                alt={"Product image"}
                className={classes.productBottomImg}
              />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </Box>
  );
}

export default ProductImages;
