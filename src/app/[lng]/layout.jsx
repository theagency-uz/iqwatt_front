import { dir } from "i18next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import Providers from "./providers";
import { languages } from "../i18n/settings";
import ThemeRegistry from "../themeRegistry";
import SidebarMenu from "@/layout/sidebarMenu";
import Head from "next/head";


export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <Head>
        <link rel='shortcut icon' href='/public/icons/favicon.ico' />
      </Head>
      <body>
        <ThemeRegistry options={{ key: "mui" }}>
          <Providers>
            <Navbar lng={lng} />
            {children}
            <Footer lng={lng} page="main" />
            {<SidebarMenu lng={lng} />}
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
