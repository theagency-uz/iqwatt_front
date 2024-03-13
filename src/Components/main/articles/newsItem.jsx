'use client';
import React from 'react';
import Image from 'next/image';
import { Box, useMediaQuery } from '@mui/material';
import { format } from 'date-fns';
import { ru, uz, enGB } from 'date-fns/locale';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';
import { strapiImageUrl } from '@/utils/endpoints';

function NewsItem({ lng, article, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  const locales = { uz: uz, ru: ru, en: enGB };

  return (
    <Link
      href={`/${lng}/articles/${article.attributes.slug}`}
      className={classes.swiperItem}
    >
      <Image
        src={strapiImageUrl + article.attributes.image.data.attributes.url}
        width={275}
        height={275}
        alt={'article-image'}
        className={classes.newsImg}
      />
      <div className={classes.date}>
        {format(new Date(article.attributes.createdAt), 'd MMMM yyyy', {
          locale: locales[lng],
        })}
      </div>
      <h3 className={classes.newsTitle}>{article.attributes.name}</h3>
    </Link>
  );
}

export default NewsItem;
