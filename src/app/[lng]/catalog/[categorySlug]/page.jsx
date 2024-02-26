import React from 'react';
import PageWrapper from './pageWrapper';
import { getCategory } from '@/services/category';

async function Catalog({ params: { lng, categorySlug }, ...props }) {
  const category = await getCategory({ lng, slug: categorySlug });
  return <PageWrapper lng={lng} />;
}

export default Catalog;
