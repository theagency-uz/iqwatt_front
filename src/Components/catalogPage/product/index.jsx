import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n';
import { strapiImageUrl } from '@/utils/endpoints';

export default async function Product({ product, lng, ...props }) {
  const { t } = await useTranslation(lng);
  return (
    <Link
      href={`/catalog/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`}
      className={classes.catalogItem}
      {...props}
    >
      <div className={classes.catalogItemBox}>
        <div className={classes.catalogWrapper}>
          <p className={classes.catalogName}>{t(product.attributes.name)}</p>
          <button className={classes.catalogItemLink}>
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
          </button>
        </div>

        <div className={classes.catalogImgBox}>
          <Image
            src={
              strapiImageUrl +
              product.attributes.preview_image.data.attributes.url
            }
            width={194}
            height={194}
            alt={'catalog-image'}
            className={classes.catalogImg}
          />
        </div>
      </div>

      <p className={classes.catalogText}>{product.attributes.tag}</p>
    </Link>
  );
}
