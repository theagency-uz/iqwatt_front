'use client';

import { useEffect, useState } from 'react';
import Product from '../product';

import classes from './styles.module.css';

export default function CatalogProducts({
  lng,
  products,
  category,
  subcategory,
  subcategory2,
}) {
  const filteredProducts = products.filter((p) => {
    if (subcategory2) {
      return p.attributes.subcategory_2.data?.id === subcategory2.id;
    }
    return p.attributes.subcategory.data?.id === subcategory.id;
  });

  return (
    <div className={classes.productsWrapper}>
      {filteredProducts?.length > 0
        ? filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : null}
    </div>
  );
}
