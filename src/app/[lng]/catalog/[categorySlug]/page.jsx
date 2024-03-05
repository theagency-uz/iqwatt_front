import { getCategory } from '@/services/category';
import { strapiImageUrl } from '@/utils/endpoints';

import Title from '@/Components/common/title';
import { useTranslation } from '@/app/i18n';
import productData from '@/data/productData';
import Image from 'next/image';
import CatalogPage from '@/Components/catalogPage';
import Portfolio from '@/Components/main/portfolio';

import classes from './styles.module.css';
import BreadCrumbs from '@/Components/common/breadCrumbs';

export async function generateMetadata({
  params: { lng, categorySlug },
  ...props
}) {
  const category = await getCategory({ lng, slug: categorySlug });

  return {
    metadataBase: new URL(strapiImageUrl),
    title: category.attributes.name,
    openGraph: {
      images: [category.attributes.image.data.attributes.url],
    },
  };
}

async function Catalog({ params: { lng, categorySlug }, ...props }) {
  const category = await getCategory({ lng, slug: categorySlug });

  const { t } = await useTranslation(lng);

  const links = [
    {
      name: category.attributes.name,
      link: `/${lng}/catalog/${category.attributes.slug}`,
      id: category.id,
    },
  ];

  return (
    <div>
      <div className={classes.productInfo}>
        <BreadCrumbs lng={lng} links={links} />
        <div className={classes.productWrapper}>
          <Title title={t('Каталог')} />
          <span className={classes.border}></span>
        </div>

        <div className={classes.productBannerBox}>
          <div className={classes.productBannerWrapper}>
            <h3 className={classes.productBannerTitle}>
              {category.attributes.name}
            </h3>
          </div>
          <div className={classes.productImgBox}>
            <Image
              src={
                strapiImageUrl + category.attributes.image.data.attributes.url
              }
              width={500}
              height={500}
              alt={'product-image'}
              className={classes.productBannerImg}
            />
          </div>
        </div>

        <CatalogPage lng={lng} product={productData} category={category} />
      </div>

      <Portfolio lng={lng} />
    </div>
  );
}

export default Catalog;
