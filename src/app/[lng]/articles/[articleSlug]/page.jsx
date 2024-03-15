import Container from '@/Container';
import { getArticle } from '@/services/articles';

import classes from './page.module.css';
import EditorContent from '@/Components/common/editorContent';
import { strapiImageUrl } from '@/utils/endpoints';
import BreadCrumbs from '@/Components/common/breadCrumbs';
import { useTranslation } from '@/app/i18n';

export async function generateMetadata({
  params: { lng, articleSlug },
  ...props
}) {
  const article = await getArticle({ lng, slug: articleSlug });

  return {
    title: article.attributes.name,
    description: 'Успех партнеров — наша миссия',
    openGraph: {
      images: [strapiImageUrl + article.attributes.image.data.attributes.url],
    },
  };
}

async function Article({ params: { lng, articleSlug } }) {
  const article = await getArticle({ lng, slug: articleSlug });

  const { t } = await useTranslation(lng);

  if (article.attributes.description.includes('oembed')) {
    article.attributes.description = article.attributes.description.replace();
  }

  const links = [
    {
      name: t('Статьи'),
      link: `/${lng}/articles`,
      id: 'articles',
    },
    {
      name: article.attributes.name,
      link: `/${lng}/articles/${article.attributes.slug}`,
      id: 'articles',
    },
  ];

  return (
    <Container className={classes.container}>
      <div className={classes.articleTop}>
        <BreadCrumbs links={links} />
        <h1 className={classes.title}>{article.attributes.name}</h1>
      </div>

      <EditorContent content={article.attributes.description} />
    </Container>
  );
}

export default Article;
