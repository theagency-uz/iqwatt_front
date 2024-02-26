'use client';
import Title from '@/Components/common/title';
import { useTranslation } from '@/app/i18n/client';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import productData from '@/data/productData';
import ProductImages from '@/Components/productImages';
import ProductInfo from '@/Components/productInfo';
import ProductTabs from '@/Components/productTabs';
import classes from './styles.module.css';

function Product({ params: { lng, id }, ...props }) {
  const { t } = useTranslation(lng);
  const [product, setProduct] = useState(
    productData.find((p) => String(p.id) === String(id))
  );

  return (
    <>
      <Box className={classes.productInfoWrapper}>
        <ProductImages productImage={product.productImages} />
        <ProductInfo lng={lng} product={product} />
      </Box>
      <ProductTabs lng={lng} product={product} />
    </>
  );
}

export default Product;
