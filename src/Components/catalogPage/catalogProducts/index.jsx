'use client';

import { useEffect, useState } from 'react';

export default function CatalogProducts({ lng, subcategory2, category }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchAll() {
      
    }
    fetchAll();
  }, [subcategory2]);

  return (
    <div>
      {products ? (
        products.map((product) => <div key={product.id}></div>)
      ) : (
        <div>no product</div>
      )}
    </div>
  );
}
