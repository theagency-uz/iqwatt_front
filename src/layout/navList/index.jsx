"use client";
import Link from "next/link";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function NavList({ lng, setOpen, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <ul className={classes.navList}>
      <li className={`${classes.navItem} ${classes.dropDown}`}>
        <Link
          href={"/"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Каталог")}
        </Link>
        <ul className={classes.navDropList}>
          <li className={classes.navDropItem}>
            <Link
              href={"/catalog"}
              onClick={(e) => {
                setOpen(false);
              }}
            >
              {t("Теплые полы")}
              <span className={classes.icon}>{">"}</span>
            </Link>
          </li>
          <li className={classes.navDropItem}>
            <Link
              href={"/"}
              onClick={(e) => {
                setOpen(false);
              }}
            >
              {t("Кондиционеры")}
              <span className={classes.icon}>{">"}</span>
            </Link>
          </li>
          <li className={classes.navDropItem}>
            <Link
              href={"/"}
              onClick={(e) => {
                setOpen(false);
              }}
            >
              {t("Системы для крыш")}
              <span className={classes.icon}>{">"}</span>
            </Link>
          </li>
          <li className={classes.navDropItem}>
            <Link
              href={"/"}
              onClick={(e) => {
                setOpen(false);
              }}
            >
              {t("Системы для участка")}
              <span className={classes.icon}>{">"}</span>
            </Link>
          </li>
          <li className={classes.navDropItem}>
            <Link
              href={"/"}
              onClick={(e) => {
                setOpen(false);
              }}
            >
              {t("Системы для труб")}
              <span className={classes.icon}>{">"}</span>
            </Link>
          </li>
          <li className={classes.navDropItem}>
            <Link
              href={"/"}
              onClick={(e) => {
                setOpen(false);
              }}
            >
              {t("Термостаты")}
              <span className={classes.icon}>{">"}</span>
            </Link>
          </li>
        </ul>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Калькулятор")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Гарантии")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/partners"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Партнерам")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/training"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Центр обучения")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/articles"}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          {t("Статьи")}
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link
          href={"/"}
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
