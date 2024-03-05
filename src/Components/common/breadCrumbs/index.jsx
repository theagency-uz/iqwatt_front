'use client';
import { Box } from '@mui/system';
import Link from 'next/link';
import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';

function BreadCrumbs({ lng, links, ...props }) {
  const { t } = useTranslation(lng);

  console.log({ links });
  return (
    <Box className={classes.breadCrumbs}>
      <Link href={`/${lng}`}>{t('Главная')}</Link>
      <span> / </span>
      {links.map((link) => (
        <Link key={link.id} href={link.link}>
          {link.name}
        </Link>
      ))}
    </Box>
  );
}

export default BreadCrumbs;
