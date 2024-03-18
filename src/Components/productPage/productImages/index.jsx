'use client';
import { Box, Skeleton } from '@mui/material';
import React, { useContext, useEffect, useRef } from 'react';
import classes from './styles.module.css';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { register } from 'swiper/element';
import CustomNavigation from './CustomNavigation';
import { strapiImageUrl } from '@/utils/endpoints';
import SettingsContext from '@/context/settings.context';

function ProductImages({ images, ...props }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    if (images) {
      register();

      /** @type {import('swiper/react').SwiperProps} */
      const params = {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        navigation: {
          enabled: true,

          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'disabled',
        },

        injectStyles: [],
      };

      Object.assign(swiperRef.current, params);

      swiperRef.current.initialize();
    }
  }, [images]);

  return (
    <Box className={classes.productImages}>
      <swiper-container
        init='false'
        ref={swiperRef}
        class={classes.productMainSwiper}
      >
        {images ? (
          images.map((image, index) => {
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
          })
        ) : (
          <Image
            src={strapiImageUrl + settings.placeholder.data.attributes.url}
            width={570}
            height={533}
            alt={'Product image'}
            className={classes.imagePlaceholder}
          />
        )}
      </swiper-container>
      {images?.length > 1 && (
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      )}
    </Box>
  );
}

export default ProductImages;
