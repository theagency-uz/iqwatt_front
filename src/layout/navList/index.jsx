"use client";
import Link from "next/link";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function NavList({ lng, setOpen, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <ul className={classes.navList}>
      <li className={classes.navItem}>
        <Link
          href={"#"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Каталог")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"#"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Калькулятор")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"#"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Гарантии")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"#"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Центр обучения")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"#"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Статьи")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"#"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("контакты")}
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
