'use client';
import React from 'react';
import Image from 'next/image';
import { Box, useMediaQuery } from '@mui/material';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';
import Link from 'next/link';
import { strapiImageUrl } from '@/utils/endpoints';

function SliderItem({ lng, slider, ...props }) {
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const { t, i18n } = useTranslation(lng);
  return (
    <Link
      className={classes.sliderImgBox}
      href={slider.link || ''}
      target={slider.isExternal ? '_blank' : '_self'}
    >
      <Image
        src={
          strapiImageUrl +
          (smUp
            ? slider.image_desktop.data.attributes.url
            : slider.image_mobile.data.attributes.url)
        }
        width={1160}
        height={580}
        alt={'slider-image'}
        priority
        className={classes.sliderImg}
      />

      <Box className={classes.sliderInfo}>
        <h2 className={classes.sliderTitle}>{slider.title}</h2>
        <p className={classes.sliderText}>{slider.description}</p>
      </Box>
    </Link>
  );
}

export default SliderItem;
