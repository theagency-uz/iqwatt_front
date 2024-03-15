'use client';
import { useTranslation } from '@/app/i18n/client';
import { useMediaQuery, Pagination } from '@mui/material';
import React, { useState } from 'react';
import classes from './styles.module.css';
import newsData from '@/data/newsData';
import Image from 'next/image';
import Link from 'next/link';
import { strapiImageUrl } from '@/utils/endpoints';
import ArticleCard from '../common/articleCard';
import goToTop from '@/utils/goToTop';

function ArticlesPage({
  lng,
  initialArticles,
  initialPage,
  limit,
  pageCount,
  ...props
}) {
  const { t } = useTranslation(lng);
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const [articles, setArticles] = useState(initialArticles);
  const [page, setPage] = useState(initialPage);

  return (
    <div>
      <ul className={classes.articlesList}>
        {articles.map((article, index) => {
          return (
            <li key={article.id}>
              <ArticleCard article={article.attributes} lng={lng} />
            </li>
          );
        })}
      </ul>
      {pageCount > 0 && (
        <Pagination
          count={pageCount}
          defaultPage={page}
          siblingCount={1}
          boundaryCount={1}
          page={page}
          sx={{
            display: 'flex',
            justifyContent: 'center',

            '& .Mui-selected': {
              border: '1px solid #000',
              borderRadius: '5px',
              backgroundColor: '#fff !important',
            },
            '& .MuiPaginationItem-root:hover': {
              backgroundColor: '#fff !important',
            },
            '& .MuiPaginationItem-root': {
              margin: smUp ? '0 3px' : '0',
              backgroundColor: '#fff !important',
            },
          }}
          className={classes.pagination}
          onChange={(e, page) => setPage(page)}
          onClick={goToTop}
        />
      )}
    </div>
  );
}

export default ArticlesPage;
