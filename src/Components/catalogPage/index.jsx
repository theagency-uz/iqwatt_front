import { useTranslation } from '@/app/i18n';
import Image from 'next/image';
import Link from 'next/link';
import Termo from '../common/termo';
import CatalogProducts from './catalogProducts';
import { getProducts } from '@/services/product';

import classes from './styles.module.css';

async function CatalogPage({ lng, product, category, ...props }) {
  const { t } = await useTranslation(lng);
  const products = await getProducts({ lng: lng, category: category.id });

  return (
    <div>
      <div className={classes.subcategoryWrapper}>
        {category.attributes.subcategory.data.map((subcategory) => (
          <div key={subcategory.id}>
            <div className={classes.subcategoryName}>
              {subcategory.attributes.name}
            </div>

            {subcategory.attributes.subcategory2.data.length > 0 ? (
              <div className={classes.subcategory2Wrapper}>
                {subcategory.attributes.subcategory2.data.map(
                  (subcategory2) => (
                    <div key={subcategory2.id}>
                      <div className={classes.subcategory2Name}>
                        {subcategory2.attributes.name}
                      </div>
                      <CatalogProducts
                        lng={lng}
                        subcategory2={subcategory2}
                        products={products}
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              <>
                <CatalogProducts
                  lng={lng}
                  subcategory={subcategory}
                  products={products}
                />
              </>
            )}
          </div>
        ))}
      </div>

      <Termo lng={lng} />
    </div>
  );
}

export default CatalogPage;
