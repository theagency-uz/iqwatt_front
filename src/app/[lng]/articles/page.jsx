import { getArticles } from '@/services/articles';
import Title from '@/Components/common/title';
import ArticlesPage from '@/Components/articlesPage';
import { useTranslation } from '@/app/i18n';

import classes from './page.module.css';
import BreadCrumbs from '@/Components/common/breadCrumbs';

const LIMIT = 8;
async function Articles({ params: { lng }, searchParams: { page = 1 } }) {
  const articles = await getArticles({ lng: lng, limit: LIMIT, page: page });
  const { t } = await useTranslation(lng);

  const pageCount = Math.ceil(articles.meta.pagination.total / LIMIT);

  const links = [
    {
      name: t('Статьи'),
      link: `/${lng}/articles`,
      id: 'articles',
    },
  ];
  
  return (
    <div className={classes.newsPage}>
      <BreadCrumbs links={links} />

      <div className={classes.newsWrapper}>
        <Title title={t('Новости и статьи')} />
        <span className={classes.border}></span>
      </div>

      <ArticlesPage
        lng={lng}
        initialArticles={articles.data}
        initialPage={page}
        limit={LIMIT}
        pageCount={pageCount}
      />
    </div>
  );
}

export default Articles;
