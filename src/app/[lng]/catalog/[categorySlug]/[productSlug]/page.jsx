import { useTranslation } from '@/app/i18n';

import ProductTabs from '@/Components/productTabs';
import classes from './styles.module.css';
import { getProductBySlug } from '@/services/product';
import BreadCrumbs from '@/Components/common/breadCrumbs';
import Container from '@/Container';
import ProductTop from '@/Components/productPage';

async function Product({
  params: { lng, categorySlug, productSlug },
  ...props
}) {
  const { t } = useTranslation(lng);
  const product = await getProductBySlug({ slug: productSlug, lng: lng });

  const links = [
    {
      name: product.attributes.category.data.attributes.name,
      link: `/${lng}/catalog/${product.attributes.category.data.attributes.slug}`,
      id: product.attributes.category.data.attributes.slug,
    },
    {
      name: product.attributes.name,
      link: `/${lng}/catalog/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`,
      id: product.attributes.slug,
    },
  ];

  return (
    <Container>
      <div className={classes.productWrapper}>
        <BreadCrumbs lng={lng} links={links} />

        <ProductTop lng={lng} product={product.attributes} />

        <ProductTabs lng={lng} product={product.attributes} />
      </div>
    </Container>
  );
}

export default Product;
