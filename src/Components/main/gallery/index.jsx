'use client';
import { useMediaQuery, Box, Skeleton } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';
import { useEffect, useRef, useState } from 'react';
import { getGallery } from '@/services/gallery';

import classes from './styles.module.css';
import Title from '@/Components/common/title';
import CustomNavigation from './CustomNavigation';
import { register } from 'swiper/element';
import { Navigation, Scrollbar } from 'swiper/modules';
import GalleryItem from './galleryItem';

function Gallery({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);
  const [gallery, setGallery] = useState();

  useEffect(() => {
    async function fetchAll() {
      const tempGallery = await getGallery({ lng, limit: 10, page: 1 });
      setGallery(tempGallery);
    }
    fetchAll();
  }, [lng]);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (gallery) {
      register();

      /** @type {import('swiper/types').SwiperOptions} */
      const params = {
        modules: [Scrollbar, Navigation],
        slidesPerView: mdUp ? 3 : 1.2,
        spaceBetween: mdUp ? 20 : 10,
        // centeredSlides: true,
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
    }
  }, [mdUp, gallery]);

  return (
    <Box className={classes.portfolio}>
      <Box className={classes.portfolioWrapper}>
        <Title title={t('Галерея объектов')} />
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </Box>

      <Box className={classes.swiperWrapper}>
        {gallery ? (
          <swiper-container
            ref={swiperRef}
            class={classes.mySwiper}
            init='false'
          >
            {gallery.map((galleryItem, index) => {
              return (
                <swiper-slide key={galleryItem.id} class={classes.swiperSlide}>
                  <GalleryItem galleryItem={galleryItem.attributes} lng={lng} />
                </swiper-slide>
              );
            })}
          </swiper-container>
        ) : (
          <Box className={classes.loaderWrapper}>
            {[...Array(3).keys()].map((v, index) => (
              <Skeleton
                key={index}
                variant='rounded'
                className={classes.loaderItem}
                height={mdUp ? 400 : 200}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Gallery;
