'use client';
import { Box, useMediaQuery } from '@mui/material';
import { register } from 'swiper/element';
import { useTranslation } from '@/app/i18n/client';
import { useEffect, useRef, useState } from 'react';
import { Scrollbar, Navigation } from 'swiper/modules';

import classes from './styles.module.css';
import Title from '@/Components/common/title';
import CustomNavigation from './CustomNavigation';
import StageItem from './stageItem';
import stageData from '@/data/stageData';

function StageMobi({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const nextItemRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar, Navigation],
      slidesPerView: 1.2,
      spaceBetween: 20,
      scrollbar: { draggable: true },
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        nextItemEl: nextItemRef.current,
        disabledClass: 'disabled',
      },

      injectStyles: [],
    };
    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <Box className={classes.stage}>
      <Box className={classes.stageInner}>
        <Box className={classes.stageWrapper}>
          <Title title={t('4 этапа \n до нового \n уровня комфорта')} />
          <p className={classes.stageText}>
            {t(
              'Вся работа делится на 4 этапа - подписание договора, замеры и выбор схемы, установка и оплата. По окончанию всех работ мы также выдаем гарантию на 20 лет.'
            )}
          </p>
          <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
        </Box>

        <Box className={classes.swiperWrapper}>
          <swiper-container
            ref={swiperRef}
            class={classes.mySwiper}
            init='false'
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

export default StageMobi;
