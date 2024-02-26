import { getCategory } from '@/services/category';
import { strapiImageUrl } from '@/utils/endpoints';

import Title from '@/Components/common/title';
import { useTranslation } from '@/app/i18n';
import productData from '@/data/productData';
import Image from 'next/image';
import CatalogPage from '@/Components/catalogPage';
import Portfolio from '@/Components/main/portfolio';

import classes from './styles.module.css';

export async function generateMetadata({
  params: { lng, categorySlug },
  ...props
}) {
  const category = await getCategory({ lng, slug: categorySlug });

  return {
    metadataBase: '',
    title: category.attributes.name,
    openGraph: {
      images: [strapiImageUrl + category.attributes.image.data.attributes.url],
    },
  };
}

async function Catalog({ params: { lng, categorySlug }, ...props }) {
  const category = await getCategory({ lng, slug: categorySlug });

  const { t } = await useTranslation(lng);

  return (
    <div>
      <div className={classes.productInfo}>
        <div className={classes.productWrapper}>
          <Title title={'Каталог'} lng={lng} />
          <span className={classes.border}></span>
        </div>

        <div className={classes.productBannerBox}>
          <div className={classes.productBannerWrapper}>
            <h3 className={classes.productBannerTitle}>{t('Теплые полы')}</h3>
          </div>
          <div className={classes.productImgBox}>
            <Image
              src={'/images/category/category1.webp'}
              width={461}
              height={324}
              alt={'product-image'}
              className={classes.productBannerImg}
            />
          </div>
        </div>

        <CatalogPage lng={lng} product={productData} />
      </div>

      <Portfolio lng={lng} />
    </div>
  );
}

export default Catalog;
