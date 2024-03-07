'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, useMediaQuery } from '@mui/material';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';
import { useContext, useRef, useState } from 'react';
import SidebarContext from '@/context/sidebar.context';
import FormContext from '@/context/form.context';
import LangSwitcher from '@/layout/langSwitcher';
import NavList from '@/layout/navList';
import MenuIcon from '@/layout/menuIcon';
import { strapiImageUrl } from '@/utils/endpoints';
// import dynamic from "next/dynamic";

// const LangSwitcher = dynamic(() => import("./langSwitcher"), { ssr: false });

function Navbar({ lng, settings, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const { form, setForm } = useContext(FormContext);
  const { open, setOpen } = useContext(SidebarContext);
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Box className={classes.navbarTop}>
        <LangSwitcher lng={lng} />

        <Box className={classes.socialLinkBox}>
          <a
            href={settings.attributes?.telegram || ''}
            className={classes.socialLink}
            target='_blank'
          >
            telegram
          </a>
          <a
            href={settings.attributes?.instagram || ''}
            className={classes.socialLink}
            target='_blank'
          >
            instagram
          </a>
        </Box>
      </Box>

      <Box className={classes.navbar}>
        <Box className={classes.navbarWrapper}>
          <Link href={`/${lng}`} className={classes.navbarImage}>
            <Image
              src={
                strapiImageUrl +
                  settings.attributes?.logo.data.attributes.url ||
                '/icons/logo.svg'
              }
              width={73}
              height={27}
              alt={'logo'}
              priority
              className={classes.navbarLogo}
            />
          </Link>

          <NavList lng={lng} setOpen={setOpen} className={classes.desktop} />

          <Button
            className={`${classes.navbarBtn} ${classes.desktop}`}
            onClick={() => setForm({ open: true })}
            disableRipple={true}
          >
            {t('оставить заявку')}
          </Button>

          <div className={classes.mobile}>
            <MenuIcon />
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
