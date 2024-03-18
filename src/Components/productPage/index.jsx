'use client';
import { useState } from 'react';
import classes from './styles.module.css';
import ProductImages from './productImages';
import ProductInfo from './productInfo';

function ProductTop({ lng, product, ...props }) {
  const [selectedVariation, setSelectedVariation] = useState(
    product.variation?.[0]?.id
  );

  return (
    <div className={classes.productInfoWrapper}>
      <ProductImages
        images={
          product.variation?.find((v) => v.id === selectedVariation)?.images
            ?.data ?? product.images.data
        }
        lng={lng}
      />
      <ProductInfo
        lng={lng}
        product={product}
        selectedVariation={selectedVariation}
        setSelectedVariation={setSelectedVariation}
      />
    </div>
  );
}

export default ProductTop;
