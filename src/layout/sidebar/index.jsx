'use client';
import { Box } from '@mui/material';
import { useContext } from 'react';
import SidebarDrawer from './sidebarDrawer';
import SidebarContext from '@/context/sidebar.context';
import SocialMedia from '@/Components/common/socialMedia';

import classes from './styles.module.css';
import NavList from '../navList';
import LangSwitcher from '../langSwitcher';
import SendFormButton from '../sendFormButton';

function SidebarMenu({ lng, settings, menu, ...props }) {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <SidebarDrawer
      maxWidth={'100%'}
      open={open}
      setOpen={setOpen}
      hasClose={true}
    >
      <Box className={classes.sidebar}>
        <NavList setOpen={setOpen} lng={lng} menu={menu} />

        <div className={classes.formButtonWrapper}>
          <SendFormButton lng={lng} />
        </div>

        <Box className={classes.sidebarWrapper}>
          <LangSwitcher lng={lng} />
          <SocialMedia settings={settings} />
        </Box>
      </Box>
    </SidebarDrawer>
  );
}

export default SidebarMenu;
