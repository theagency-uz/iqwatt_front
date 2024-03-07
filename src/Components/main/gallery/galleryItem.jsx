'use client';
import React from 'react';
import Image from 'next/image';
import { Box, useMediaQuery } from '@mui/material';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';
import { strapiImageUrl } from '@/utils/endpoints';

function GalleryItem({ lng, galleryItem, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  return (
    <>
      <Image
        src={strapiImageUrl + galleryItem.image.data.attributes.url}
        width={648}
        height={400}
        alt={'portfolio-image'}
        priority
        className={classes.portfolioImg}
      />
      <p className={classes.portfolioText}>{galleryItem.name}</p>
    </>
  );
}

export default GalleryItem;
