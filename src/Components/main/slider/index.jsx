'use client';
import { Box, useMediaQuery, Skeleton } from '@mui/material';
import { register } from 'swiper/element';
import { useTranslation } from '@/app/i18n/client';
import { useEffect, useRef, useState } from 'react';
import { Scrollbar, Autoplay, Navigation, Pagination } from 'swiper/modules';

import classes from './styles.module.css';
import Title from '@/Components/common/title';
import CustomNavigation from './CustomNavigation';
import SliderItem from './sliderItem';
import sliderData from '@/data/sliderData';
import CustomPagination from './CustomPagination';
import CustomScrollbar from './CustomScrollbar';
import { getSlider } from '@/services/slider';
import { AnimatePresence, motion } from 'framer-motion';

function Slider({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const scrollbarRef = useRef(null);

  const [slider, setSlider] = useState();

  useEffect(() => {
    register();

    /** @type {import('swiper/types').SwiperOptions} */
    const params = {
      modules: [Scrollbar, Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
      scrollbar: { el: scrollbarRef.current, draggable: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: 'disabled',
      },
      pagination: {
        el: paginationRef.current,
        type: 'fraction',
      },
      injectStyles: [],
    };

    if (slider) {
      Object.assign(swiperRef.current, params);

      swiperRef.current.initialize();
    }
  }, [slider]);

  useEffect(() => {
    async function fetchAll() {
      const tempSlider = await getSlider({ lng });
      console.log({ tempSlider });
      setSlider(tempSlider.attributes.slide);
    }
    fetchAll();
  }, [lng]);

  return (
    <Box className={classes.slider}>
      <AnimatePresence mode='sync'>
        <motion.div
          key={slider}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {slider ? (
            <>
              <swiper-container
                ref={swiperRef}
                class={classes.mySwiper}
                init='false'
              >
                {slider.map((slider, index) => {
                  return (
                    <swiper-slide key={slider.id} class={classes.swiperSlide}>
                      <SliderItem slider={slider} lng={lng} />
                    </swiper-slide>
                  );
                })}
              </swiper-container>
              {slider.length > 0 && (
                <Box className={classes.navigation}>
                  <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
                  <CustomScrollbar scrollbarRef={scrollbarRef} />
                  <CustomPagination paginationRef={paginationRef} />
                </Box>
              )}
            </>
          ) : (
            <>
              <Skeleton variant='rounded' className={classes.sliderLoader} />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}

export default Slider;
