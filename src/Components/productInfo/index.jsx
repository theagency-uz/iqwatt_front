'use client';
import { useTranslation } from '@/app/i18n/client';
import { Box, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import classes from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FormContext from '@/context/form.context';
import ProductVariations from './productVariations';
import ProductCharacteristics from './productCharacteristics';

function ProductInfo({ lng, product, ...props }) {
  const { t } = useTranslation(lng);
  const { form, setForm } = useContext(FormContext);
  const [selectedVariation, setSelectedVariation] = useState('');

  return (
    <Box className={classes.productBox}>
      <Box className={classes.productWrapper}>
        <h3 className={classes.productTitle}>{product.name}</h3>
        {product.variation?.length > 0 && (
          <ProductVariations
            variations={product.variation}
            lng={lng}
            selectedVariation={selectedVariation}
            setSelectedVariation={setSelectedVariation}
          />
        )}
        <ProductCharacteristics
          product={product}
          lng={lng}
          selectedVariation={selectedVariation}
        />
        <Button
          className={classes.productBtn}
          onClick={() => setForm({ open: true })}
          disableRipple={true}
        >
          {t('оставить заявку')}
          <Box className={classes.productIconBox}>
            <Image
              src={'/icons/arrow-right.svg'}
              width={18}
              height={15}
              alt={'icon'}
              className={classes.productIcon}
            />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

export default ProductInfo;
