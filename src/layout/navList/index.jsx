'use client';
import Link from 'next/link';
import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';

function NavList({ lng, className = '', menu, isDesktop, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <ul
      className={`${className} ${classes.navList} ${
        isDesktop ? classes.desktop : ''
      }`}
    >
      {menu.map((m) => (
        <li
          className={`${classes.navItem} ${m.submenu ? classes.dropDown : ''}`}
          key={m.link}
        >
          <Link
            href={m.link}
            onClick={(e) => {
              if (m.submenu) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
          >
            {m.name}
          </Link>
          {m.submenu ? (
            <ul className={classes.navDropList}>
              {m.submenu.map((sm) => (
                <li className={classes.navDropItem} key={sm.link}>
                  <Link href={sm.link}>
                    {sm.name}
                    <span className={classes.icon}>{'>'}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default NavList;
