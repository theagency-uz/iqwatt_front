import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@mui/material';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';
import { strapiImageUrl } from '@/utils/endpoints';

export default function CategoryItem({ lng, category }) {
  const { t, i18n } = useTranslation(lng);

  return (
    <li className={classes.categoryItem}>
      <a href={`/${lng}/catalog/${category.slug}`}>
      <Box className={classes.categoryBox}>
        <h4 className={classes.categoryTitle}>{category.name}</h4>

        <Link
          href={`/${lng}/catalog/${category.slug}`}
          className={classes.categoryItemLink}
        >
          <span>{t('в каталог')}</span>
          <Box className={classes.categoryItemIconBox}>
            <Image
              src={'/icons/arrow-right-white.svg'}
              width={18}
              height={15}
              alt={'icon'}
              className={classes.categoryIcon}
            />
          </Box>
        </Link>
      </Box>

      <Box className={classes.categoryImgBox}>
        <Image
          src={strapiImageUrl + category.image.data.attributes.url}
          width={461}
          height={324}
          alt={'category-image'}
          className={classes.categoryImg}
        />
      </Box>

      </a>
    </li>
  );
}
