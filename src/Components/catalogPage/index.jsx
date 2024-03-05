import { useTranslation } from '@/app/i18n';
import classes from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Termo from '../common/termo';
import CatalogProducts from './catalogProducts';
import { getProducts } from '@/services/product';

async function CatalogPage({ lng, product, category, ...props }) {
  const { t } = await useTranslation(lng);
  const products = await getProducts({ lng: lng, category: category.id });
  console.log(products);
  return (
    <>
      {category.attributes.subcategory.data.map((subcategory) => (
        <div key={subcategory.id}>
          <div className={classes.subcategoryName}>
            {subcategory.attributes.name}
          </div>
          {subcategory.attributes.subcategory2.data.map((subcategory2) => (
            <div key={subcategory2.id}>
              <div className={classes.subcategory2Name}>
                {subcategory2.attributes.name}
              </div>
              <CatalogProducts lng={lng} subcategory2={subcategory2} />
            </div>
          ))}
        </div>
      ))}
      {product.map((product, index) => {
        return (
          <div key={product.id} className={classes.catalog}>
            {product.categoryTitle && (
              <h3 className={classes.catalogMainTitle}>
                {t(product.categoryTitle)}
              </h3>
            )}
            <h4 className={classes.catalogTitle}>
              {t(product.subCategoryTitle)}
            </h4>
            <ul className={classes.catalogList}>
              <Link
                href={`/product/${product.id}`}
                className={classes.catalogItem}
              >
                <div className={classes.catalogItemBox}>
                  <div className={classes.catalogWrapper}>
                    <p className={classes.catalogName}>{t(product.title)}</p>
                    <div className={`${classes.catalogItemLink} buttonHover`}>
                      {t('смотреть')}
                      <div className={classes.catalogItemIconBox}>
                        <Image
                          src={'/icons/arrow-right-white.svg'}
                          width={18}
                          height={15}
                          alt={'icon'}
                          className={classes.catalogIcon}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={classes.catalogImgBox}>
                    <Image
                      src={product.image}
                      width={194}
                      height={194}
                      alt={'catalog-image'}
                      className={classes.catalogImg}
                    />
                  </div>
                </div>

                <p className={classes.catalogText}>{t(product.text)}</p>
              </Link>
            </ul>
          </div>
        );
      })}

      <Termo lng={lng} />
    </>
  );
}

export default CatalogPage;
