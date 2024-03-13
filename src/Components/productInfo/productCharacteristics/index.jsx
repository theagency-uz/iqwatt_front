'use client';
import { useTranslation } from '@/app/i18n/client';
import { Box, Button, useMediaQuery } from '@mui/material';
import React from 'react';
import classes from './styles.module.css';

function ProductCharacteristics({ lng, product, selectedVariation, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  return (
    <div className={classes.wrapper}>
      {selectedVariation && (
        <ul className={classes.variationList}>
          {product.variation
            .find((v) => v.id === selectedVariation)
            .characteristics.map((char) => (
              <li className={classes.productItem} key={char.id}>
                <span className={classes.productDesc}>{char.name}:</span>
                <span className={classes.productAbout}>{char.value}</span>
              </li>
            ))}
        </ul>
      )}
      <ul className={classes.productList}>
        {product.characteristics.map((char) => (
          <li className={classes.productItem} key={char.id}>
            <span className={classes.productDesc}>{char.name}:</span>
            <span className={classes.productAbout}>{char.value}</span>
          </li>
        ))}
        <li className={classes.productItem}>
          <span className={classes.productDesc}>{t('Категория')}:</span>
          <span className={classes.productAbout}>
            {product.subcategory_2
              ? product.subcategory_2.data?.attributes?.name
              : product.subcategory.data?.attributes.name}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ProductCharacteristics;
