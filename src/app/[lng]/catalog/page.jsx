import { redirect } from 'next/navigation';
import { getCategories } from '@/services/category';

export default async function CatalogRoot({ params: { lng } }) {
  const category = await getCategories({ lng });

  return redirect(`/${lng}/catalog/${category[0].attributes.slug}`);
}
