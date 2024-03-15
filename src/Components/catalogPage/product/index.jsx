'use client';
import Image from 'next/image';
import Link from 'next/link';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';
import { strapiImageUrl } from '@/utils/endpoints';
import skeleton from '@/utils/skeleton';
import { useContext } from 'react';
import SettingsContext from '@/context/settings.context';

export default function Product({ product, lng, ...props }) {
  const { t } = useTranslation(lng);

  const { settings } = useContext(SettingsContext);

  return (
    <Link
      href={`/catalog/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`}
      className={classes.catalogItem}
      {...props}
    >
      <div className={classes.catalogItemBox}>
        <div className={classes.catalogWrapper}>
          <p className={classes.catalogName}>{t(product.attributes.name)}</p>
        </div>

        <div className={classes.catalogImgBox}>
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
          <Image
            src={
              strapiImageUrl +
              (product.attributes.preview_image.data
                ? product.attributes.preview_image.data.attributes.url
                : settings.placeholder.data.attributes.url)
            }
            width={200}
            height={200}
            alt={'catalog-image'}
            className={classes.catalogImg}
            placeholder='blur'
            blurDataURL={skeleton}
          />
        </div>
      </div>

      <p className={classes.catalogText}>{product.attributes.tag}</p>
    </Link>
  );
}
