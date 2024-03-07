'use client';
import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import classes from './styles.module.css';
import Image from 'next/image';
import { Scrollbar, Navigation } from 'swiper/modules';
import { register } from 'swiper/element';
import CustomNavigation from './CustomNavigation';
import { strapiImageUrl } from '@/utils/endpoints';

function ProductImages({ images, ...props }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    register();

    /** @type {import('swiper/react').SwiperProps} */
    const params = {
      modules: [Scrollbar, Navigation],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      scrollbar: { draggable: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: 'disabled',
      },

      injectStyles: [],
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, [images]);

  return (
    <Box className={classes.productImages}>
      <swiper-container
        init='false'
        ref={swiperRef}
        class={classes.productMainSwiper}
      >
        {images.map((image, index) => {
          return (
            <swiper-slide class={classes.productMainSwiperItem} key={index}>
              <Image
                src={strapiImageUrl + image.attributes.url}
                width={570}
                height={533}
                alt={'Product image'}
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
