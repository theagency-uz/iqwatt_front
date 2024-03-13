import Head from 'next/head';
import { dir } from 'i18next';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from '@/layout/navbar';
import Footer from '@/layout/footer';
import Providers from './providers';
import { languages } from '../i18n/settings';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { theme } from '@/theme/site';

import '../globals.css';
import { getSettings } from '@/services/settings';
import { getCategories } from '@/services/category';
import SidebarMenu from '@/layout/sidebar';
import { useTranslation } from '../i18n';

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
  const { t } = await useTranslation(lng);

  let settings = await getSettings({ lng: lng });
  if (settings.error) {
    settings = {};
  }
  let categories = await getCategories({ lng: lng });
  if (categories.error) {
    categories = [];
  }

  const menu = [
    {
      link: `/${lng}/catalog`,
      name: t('Каталог'),
      submenu: categories?.map((category) => {
        return {
          link: `/${lng}/catalog/${category.attributes.slug}`,
          name: category.attributes.name,
        };
      }),
    },
    {
      link: '#calculator',
      name: t('Калькулятор'),
    },
    {
      link: '/guarantee',
      name: t('Гарантии'),
    },
    {
      link: '/partners',
      name: t('Партнерам'),
    },
    {
      link: '/training',
      name: t('Центр обучения'),
    },
    {
      link: '/articles',
      name: t('Статьи'),
    },
    {
      link: '#contacts',
      name: t('Контакты'),
    },
  ];
  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <link rel='shortcut icon' href='/public/icons/favicon.ico' />
      </Head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Providers lng={lng} initialSettings={settings}>
              <Navbar
                lng={lng}
                settings={settings}
                categories={categories}
                menu={menu}
              />
              {children}
              <SidebarMenu lng={lng} settings={settings} menu={menu} />
              <Footer lng={lng} page='main' settings={settings} />
            </Providers>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
