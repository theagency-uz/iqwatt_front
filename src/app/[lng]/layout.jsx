import Head from 'next/head';
import { dir } from 'i18next';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from '@/layout/navbar';
import Footer from '@/layout/footer';
import Providers from './providers';
import { languages } from '../i18n/settings';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import SidebarMenu from '@/layout/sidebarMenu';
import { theme } from '@/theme/site';

import '../globals.css';
import { getSettings } from '@/services/settings';

export async function generateMetadata({ params: { lng } }) {
  if (lng === 'ru') {
    return {
      title: {
        default: 'Официальный сайт | IQwatt',
        template: '%s | IQwatt',
      },
      description: 'Канадские системы для комфорта и безопасности',
      keywords: ['Ташкент', 'Узбекистан'],
    };
  } else if (lng === 'en') {
    return {
      title: {
        default: 'Официальный сайт | IQwatt',
        template: '%s | IQwatt',
      },
      description: 'Канадские системы для комфорта и безопасности',
      keywords: [],
    };
  }
  return {
    title: {
      default: 'Официальный сайт | IQwatt',
      template: '%s | IQwatt',
    },
    description: 'Канадские системы для комфорта и безопасности',
    keywords: [],
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params: { lng } }) {
  const settings = await getSettings({ lng: lng });

  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <link rel='shortcut icon' href='/public/icons/favicon.ico' />
      </Head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Providers lng={lng}>
              <Navbar lng={lng} settings={settings} />
              {children}
              <Footer lng={lng} page='main' settings={settings} />
              <SidebarMenu lng={lng} settings={settings} />
            </Providers>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
