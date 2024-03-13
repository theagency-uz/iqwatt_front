'use client';
import { useMediaQuery, Box, Skeleton, Button } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';

import { register } from 'swiper/element';
import { useEffect, useRef, useState } from 'react';
import { Scrollbar, Navigation } from 'swiper/modules';

import classes from './styles.module.css';
import Title from '@/Components/common/title';
import CustomNavigation from './CustomNavigation';
import ReviewsItem from './reviewsItem';
import ModalContent from './modalContent';

function VideosContent({
  lng,
  videos,
  handleMore,
  hasMore,
  moreLoading,
  ...props
}) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  const [modal, setModal] = useState({ open: false, video: null });

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (videos) {
      register();

      const params = {
        modules: [Scrollbar, Navigation],
        slidesPerView: mdUp ? 4 : 1.5,
        spaceBetween: 20,
        // loop: true,
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
  }, [mdUp, videos]);

  return (
    <Box className={classes.reviews}>
      <Box className={classes.reviewsWrapper}>
        <Title title={'IQ WATT в деле'} lng={lng} />
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </Box>

      <Box className={classes.swiperWrapper}>
        {videos ? (
          <swiper-container
            ref={swiperRef}
            class={classes.mySwiper}
            init='false'
          >
            {videos.map((video, index) => {
              return (
                <swiper-slide key={video.id} class={classes.swiperSlide}>
                  <ReviewsItem
                    video={video.attributes}
                    lng={lng}
                    setModal={setModal}
                  />
                </swiper-slide>
              );
            })}
            {hasMore && !moreLoading && (
              <swiper-slide class={classes.swiperSlide}>
                <div className={classes.moreContent}>
                  <Button
                    onClick={handleMore}
                    sx={{
                      color: '#181818',
                      fontSize: '20px',
                    }}
                  >
                    {t('Загрузить еще')}
                  </Button>
                </div>
              </swiper-slide>
            )}
            {moreLoading && (
              <Skeleton
                key={index}
                variant='rounded'
                className={classes.loaderItem}
                height={mdUp ? 623 : 423}
              />
            )}
          </swiper-container>
        ) : (
          <Box className={classes.loaderWrapper}>
            {[...Array(mdUp ? 4 : 2).keys()].map((v, index) => (
              <Skeleton
                key={index}
                variant='rounded'
                className={classes.loaderItem}
              />
            ))}
          </Box>
        )}
      </Box>

      <ModalContent
        open={modal.open}
        video={modal.video}
        setOpen={(v) =>
          setModal((m) => {
            return { ...m, open: v };
          })
        }
        lng={lng}
      />
    </Box>
  );
}

export default VideosContent;
