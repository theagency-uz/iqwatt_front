'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, useMediaQuery } from '@mui/material';

import { useTranslation } from '@/app/i18n/client';
import { useContext, useRef, useState } from 'react';

import classes from './styles.module.css';
import Title from '@/Components/common/title';

function Partners({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.partners}>
      <Box className={classes.partnersWrapper}>
        <Box className={classes.partnersImgBox}>
          <Image
            src={'/static/site/partner-img.png'}
            width={570}
            height={385}
            alt={'image'}
            className={classes.partnersImg}
          />
        </Box>

        <Box className={classes.partnersInfo}>
          <Title title={t('Партнерам')} />
          <Box className={classes.partnersTextBox}>
            <p className={classes.partnersText}>
              {t(
                'IQWATT сформировал команду целеустремлённых людей, отладил систему поставок, создал высокую культуру партнёрских отношений. Мы сконцентрированы на том, чтобы идти у к успеху совместно с нашими партнёрами.'
              )}
            </p>

            <p className={classes.partnersText}>
              {t(
                'Приглашаем торговые компании, заинтересованные в нашем продукте, а также дизайнерам помещений, строительным бригадам, профессиональным электрикам.'
              )}
            </p>
          </Box>
          <Link href={'/partners'} className={classes.partnersLink}>
            {t('подробнее')}
            <Box className={classes.partnersIconBox}>
              <Image
                src={'/icons/arrow-right.svg'}
                width={18}
                height={15}
                alt={'icon'}
                className={classes.partnersIcon}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Partners;
