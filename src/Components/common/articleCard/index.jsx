import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './styles.module.css';
import { strapiImageUrl } from '@/utils/endpoints';
import { enGB, ru, uz } from 'date-fns/locale';

export default function ArticleCard({ article, lng }) {
  const locales = { uz: uz, ru: ru, en: enGB };

  return (
    <Link href={`/${lng}/articles/${article.slug}`} className={classes.article}>
      <Image
        src={strapiImageUrl + article.image.data.attributes.url}
        width={1000}
        height={1000}
        alt={article.name}
        className={classes.articleImg}
      />
      <div className={classes.date}>
        {format(new Date(article.date), 'd MMMM yyyy', {
          locale: locales[lng],
        })}
      </div>
      <h3 className={classes.title}>{article.name}</h3>
    </Link>
  );
}
