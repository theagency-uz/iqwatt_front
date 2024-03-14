import { getArticles } from '@/services/articles';
import Title from '@/Components/common/title';
import ArticlesPage from '@/Components/articlesPage';
import { useTranslation } from '@/app/i18n';

import classes from './page.module.css';

const LIMIT = 8;
async function Articles({ params: { lng }, searchParams: { page = 1 } }) {
  const articles = await getArticles({ lng: lng, limit: LIMIT, page: page });
  const { t } = await useTranslation(lng);

  const pageCount = Math.ceil((productResult?.count ?? 0) / PRODUCT_PER_PAGE);
  console.log(articles.meta);

  return (
    <div className={classes.newsPage}>
      <div className={classes.newsWrapper}>
        <Title title={t('Новости и статьи')} />
        <span className={classes.border}></span>
      </div>

      <ArticlesPage
        lng={lng}
        initialArticles={articles.data}
        initialPage={page}
        limit={LIMIT}
        pageCount={articles.meta.total}
      />
    </div>
  );
}

export default Articles;
