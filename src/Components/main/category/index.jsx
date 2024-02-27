'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, useMediaQuery, Skeleton } from '@mui/material';

import { useTranslation } from '@/app/i18n/client';

import classes from './styles.module.css';
import Title from '@/Components/common/title';
import categoryData from '@/data/categoryData';
import { useEffect, useState } from 'react';
import { getCategories } from '@/services/category';
import CategoryItem from './categoryItem';

function Category({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);

  const [categories, setCategories] = useState();

  useEffect(() => {
    async function fetchAll() {
      const tempCategories = await getCategories({ lng });
      setCategories(tempCategories);
    }
    fetchAll();
  }, [lng]);

  return (
    <Box className={classes.category} id='catalog'>
      <Box className={classes.categoryWrapper}>
        <Title title={t('Каталог')} />
      </Box>

      <ul className={classes.categoryList}>
        {categories ? (
          categories.map((category, index) => {
            return (
              <CategoryItem
                key={category.id}
                category={category.attributes}
                lng={lng}
              />
            );
          })
        ) : (
          <Box className={classes.loaderWrapper}>
            <Skeleton
              variant='rounded'
              className={classes.loaderItem}
              height={200}
            />
            <Skeleton
              variant='rounded'
              className={classes.loaderItem}
              height={200}
            />
            <Skeleton
              variant='rounded'
              className={classes.loaderItem}
              height={200}
            />
            <Skeleton
              variant='rounded'
              className={classes.loaderItem}
              height={200}
            />
          </Box>
        )}
      </ul>
    </Box>
  );
}

export default Category;
