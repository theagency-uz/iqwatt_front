'use client';
import { useMediaQuery, Skeleton } from '@mui/material';
import { useTranslation } from '@/app/i18n/client';
import { useEffect, useRef, useState } from 'react';
import { getGallery } from '@/services/gallery';
import { getArticles } from '@/services/articles';
import { register } from 'swiper/element';
import Title from '@/Components/common/title';
import CustomNavigation from './customNavigation';
import Link from 'next/link';
import Image from 'next/image';

import classes from './styles.module.css';
import { Navigation, Scrollbar } from 'swiper/modules';
import ArticleCard from '@/Components/common/articleCard';

function Articles({ lng, ...props }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  const [articles, setArticles] = useState();

  useEffect(() => {
    async function fetchAll() {
      const tempArticles = await getArticles({ lng, limit: 10, page: 1 });
      setArticles(tempArticles.data);
    }
    fetchAll();
  }, [lng]);

  useEffect(() => {
    if (articles) {
      register();

      const params = {
        modules: [Scrollbar, Navigation],
        slidesPerView: mdUp ? 4 : 1.2,
        spaceBetween: mdUp ? 20 : 10,
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
  }, [mdUp, articles]);

  return (
    <div className={classes.news}>
      <div className={classes.newsWrapper}>
        <Title title={t('Новости и статьи')} />
        <CustomNavigation prevRef={prevRef} nextRef={nextRef} />
      </div>

      <div className={classes.swiperWrapper}>
        {articles ? (
          <swiper-container
            ref={swiperRef}
            class={classes.mySwiper}
            init='false'
          >
            {articles.map((article, index) => {
              return (
                <swiper-slide key={article.id} class={classes.swiperSlide}>
                  <ArticleCard article={article.attributes} lng={lng} />
                </swiper-slide>
              );
            })}
          </swiper-container>
        ) : (
          <div className={classes.loaderWrapper}>
            {[...Array(4).keys()].map((v, index) => (
              <Skeleton
                key={index}
                variant='rounded'
                className={classes.loaderItem}
                height={mdUp ? 623 : 423}
              />
            ))}
          </div>
        )}
      </div>

      <div className={classes.newsBox}>
        <Link href={'/articles'} className={classes.newsLink}>
          {t('смотреть всё')}
          <div className={classes.newsIconBox}>
            <Image
              src={'/icons/arrow-right.svg'}
              width={18}
              height={15}
              alt={'icon'}
              className={classes.newsIcon}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Articles;
