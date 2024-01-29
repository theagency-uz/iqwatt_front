"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import LangSwitcher from "./langSwitcher";
import ExtraLangSwitcher from "./extraLangSwitcher";

function Footer({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className={classes.footer}>
      <>
        <ul className={classes.footerList}>
          <li className={classes.footerItem}>
            <Box className={classes.footerIconBox}>
              <Image
                src={"/icons/location.svg"}
                width={18}
                height={18}
                alt={"logo"}
                className={classes.footerIcon}
              />
              {t("Адрес")}
            </Box>
            <a href={"/"} className={classes.footerLink}>
              {t("г. Ташкент, ул. \n Янгишахар 3А")}
            </a>
            <span className={classes.footerTime}>{t("Вт—Вс 09:00—18:00")}</span>
          </li>
          <li className={classes.footerItem}>
            <Box className={classes.footerIconBox}>
              <Image
                src={"/icons/mail.svg"}
                width={19}
                height={21}
                alt={"logo"}
                className={classes.footerIcon}
              />
              {t("Почта")}
            </Box>
            <a href={"/"} className={classes.footerLink}>
              {t("info@iqwatt.uz")}
            </a>

            <Box className={classes.footerSocialBox}>
              <a href="/">
                <Image
                  src={"/icons/telegram.svg"}
                  width={31}
                  height={32}
                  alt={"logo"}
                  className={classes.footerSocial}
                />
              </a>
              <a href="/">
                <Image
                  src={"/icons/youtube.svg"}
                  width={31}
                  height={32}
                  alt={"logo"}
                  className={classes.footerSocial}
                />
              </a>
            </Box>
          </li>

          <li className={classes.footerItem}>
            <Box className={classes.footerIconBox}>
              <Image
                src={"/icons/mail.svg"}
                width={19}
                height={21}
                alt={"logo"}
                className={classes.footerIcon}
              />
              {t("Телефон")}
            </Box>
            <a href={"tel +998 908304004"} className={classes.footerLink}>
              {t("+998 908304004")}
            </a>
            <Box className={classes.footerSocialBox}>
              <a href="/">
                <Image
                  src={"/icons/instagram.svg"}
                  width={31}
                  height={32}
                  alt={"logo"}
                  className={classes.footerSocial}
                />
              </a>
              <a href="/">
                <Image
                  src={"/icons/facebook.svg"}
                  width={31}
                  height={32}
                  alt={"logo"}
                  className={classes.footerSocial}
                />
              </a>
            </Box>
          </li>

          <li className={classes.footerItem}>
            <Link href={"/"} onClick={goToTop} className={classes.footerImage}>
              <Image
                src={"/icons/logo.svg"}
                width={130}
                height={37}
                alt={"logo"}
                priority
                className={classes.footerLogo}
              />
            </Link>
          </li>

          <li className={classes.footerItem}>
            <Box className={classes.footerItemLink}>
              <Box className={classes.footerBox}>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Теплые полы")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Системы для участка")}
                </Link>
              </Box>

              <Box className={classes.footerBox}>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Системы для крыш")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Системы для труб")}
                </Link>
              </Box>
            </Box>
          </li>

          <li className={classes.footerItem}>
            <Box className={classes.footerItemLink}>
              <Box className={classes.footerBox}>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Каталог")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Калькулятор")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Гарантии")}
                </Link>
              </Box>

              <Box className={classes.footerBox}>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Центр обучения")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Статьи")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Контакты")}
                </Link>
              </Box>
            </Box>
          </li>

          <li className={classes.footerItem}>
            <ExtraLangSwitcher lng={lng} />
          </li>

          <li className={classes.footerItem}>
            <Link
              href={"/"}
              onClick={goToTop}
              className={classes.footerBoxItem}
            >
              {t("Разработка сайта")}
            </Link>
          </li>

          <li className={classes.footerItem}>
            <Link href={"/"} onClick={goToTop} className={classes.footerPolicy}>
              {t("Политика конфиденциальности")}
            </Link>
          </li>
        </ul>
      </>
    </Box>
  );
}

export default Footer;
