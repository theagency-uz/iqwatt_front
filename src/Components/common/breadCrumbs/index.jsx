import Link from 'next/link';
import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n';

async function BreadCrumbs({ lng, links, ...props }) {
  const { t } = await useTranslation(lng);

  return (
    <div className={classes.breadCrumbs}>
      <Link href={`/${lng}`}>{t('Главная')}</Link>
      {links.map((link) => (
        <Link key={link.id} href={link.link}>
          {' / '}
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default BreadCrumbs;
