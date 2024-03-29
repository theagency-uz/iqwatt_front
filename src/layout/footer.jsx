"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import ExtraLangSwitcher from "./extraLangSwitcher";
import YandexMap from "@/Components/common/yandexMap";

function Footer({ lng, page, settings, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (mdUp) {
    return (
      <>
        <Box className={classes.footer}>
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
              <a
                href={settings.attributes?.address_link}
                className={classes.footerLink}
                target="_blank"
              >
                {settings.attributes?.address}
              </a>
              <span className={classes.footerTime}>
                {settings.attributes?.working_time}
              </span>
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
              <a
                href={"mailto:info@iqwatt.uz"}
                className={classes.footerLink}
                target="_blank"
              >
                {t("info@iqwatt.uz")}
              </a>
            </li>

            <li className={classes.footerItem}>
              <Box className={classes.footerIconBox}>
                <Image
                  src={"/icons/phone.svg"}
                  width={15}
                  height={15}
                  alt={"logo"}
                  className={classes.footerIcon}
                />
                {t("Телефон")}
              </Box>
              <a
                href={"tel: +998 78 333 00 73"}
                className={classes.footerLink}
                target="_blank"
              >
                {t("+998 78 333 00 73")}
              </a>
              <Box className={classes.footerSocialBox}>
                <a href="https://t.me/uz_iqwatt" target="_blank">
                  <Image
                    src={"/icons/telegram.svg"}
                    width={31}
                    height={32}
                    alt={"logo"}
                    className={classes.footerSocial}
                  />
                </a>
                <a href="https://www.instagram.com/iqwatt" target="_blank">
                  <Image
                    src={"/icons/instagram.svg"}
                    width={31}
                    height={32}
                    alt={"logo"}
                    className={classes.footerSocial}
                  />
                </a>
                <a href="https://www.facebook.com/iqwatt.uz" target="_blank">
                  <Image
                    src={"/icons/facebook.svg"}
                    width={31}
                    height={32}
                    alt={"logo"}
                    className={classes.footerSocial}
                  />
                </a>
                <a href="https://www.youtube.com/@iqwatt6962/playlists" target="_blank">
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
              <Link
                href={"/"}
                onClick={goToTop}
                className={classes.footerImage}
              >
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
                    {t("Кондиционеры")}
                  </Link>
                  <Link href={"/"} className={classes.footerBoxItem}>
                    {t("Системы для участка")}
                  </Link>
                </Box>

                <Box className={classes.footerBox}>
                  <Link href={"/"} className={classes.footerBoxItem}>
                    {t("Системы для крыши")}
                  </Link>
                  <Link href={"/"} className={classes.footerBoxItem}>
                    {t("Системы для труб")}
                  </Link>
                  <Link href={"/"} className={classes.footerBoxItem}>
                    {t("Термостаты")}
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
                  <Link href={"/"} className={classes.footerBoxItem}>
                    {t("Партнерам")}
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
                href={"https://theagency.uz/"}
                onClick={goToTop}
                target="_blank"
                className={classes.footerBoxItem}
              >
                {t("Разработка сайта")}
              </Link>
            </li>

            <li className={classes.footerItem}>
              <Link
                href={"/"}
                onClick={goToTop}
                className={classes.footerPolicy}
              >
                {t("Политика конфиденциальности")}
              </Link>
            </li>
          </ul>
        </Box>

        <YandexMap type="desktop" lng={lng} />
      </>
    );
  }
  return (
    <>
      <Box className={classes.footer}>
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
            <a
              href={"https://yandex.uz/maps/-/CDB9nG8h"}
              className={classes.footerLink}
              target="_blank"
            >
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
            <a
              href={"mailto:info@iqwatt.uz"}
              className={classes.footerLink}
              target="_blank"
            >
              {t("info@iqwatt.uz")}
            </a>
          </li>

          <li className={classes.footerItem}>
            <Box className={classes.footerIconBox}>
              <Image
                src={"/icons/phone.svg"}
                width={15}
                height={15}
                alt={"logo"}
                className={classes.footerIcon}
              />
              {t("Телефон")}
            </Box>
            <a
              href={"tel: +998 78 333 00 73"}
              className={classes.footerLink}
              target="_blank"
            >
              {t("+998 78 333 00 73")}
            </a>
            <Box className={classes.footerSocialBox}>
              <a href="https://t.me/uz_iqwatt" target="_blank">
                <Image
                  src={"/icons/telegram.svg"}
                  width={31}
                  height={32}
                  alt={"logo"}
                  className={classes.footerSocial}
                />
              </a>
              <a href="https://www.instagram.com/iqwatt" target="_blank">
                <Image
                  src={"/icons/instagram.svg"}
                  width={31}
                  height={32}
                  alt={"logo"}
                  className={classes.footerSocial}
                />
              </a>
              <a href="https://www.facebook.com/iqwatt.uz" target="_blank">
                <Image
                  src={"/icons/facebook.svg"}
                  width={31}
                  height={32}
                  alt={"logo"}
                  className={classes.footerSocial}
                />
              </a>
              <a href="https://www.youtube.com/@iqwatt6962/playlists" target="_blank">
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
            <Box className={classes.footerItemLink}>
              <Box className={classes.footerBox}>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Теплые полы")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Кондиционеры")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Системы для участка")}
                </Link>
              </Box>
            </Box>
            <Box className={classes.footerItemLink}>
              <Box className={classes.footerBox}>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Системы для крыши")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Системы для труб")}
                </Link>
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Термостаты")}
                </Link>
              </Box>
            </Box>
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
                <Link href={"/"} className={classes.footerBoxItem}>
                  {t("Партнерам")}
                </Link>
              </Box>
            </Box>
            <Box className={classes.footerItemLink}>
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
            <Box className={classes.footerLinkBox}>
              <Link
                href={"https://theagency.uz/"}
                onClick={goToTop}
                target="_blank"
                className={classes.footerBoxItem}
              >
                {t("Разработка сайта")}
              </Link>

              <Link
                href={"/"}
                onClick={goToTop}
                className={classes.footerPolicy}
              >
                {t("Политика конфиденциальности")}
              </Link>
            </Box>
            <ExtraLangSwitcher lng={lng} />
          </li>
        </ul>
      </Box>

      <YandexMap type="desktop" lng={lng} />
    </>
  );
}

export default Footer;
