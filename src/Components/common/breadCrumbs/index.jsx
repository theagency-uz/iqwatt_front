"use client";
import { Box } from "@mui/system";
import Link from "next/link";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";

function BreadCrumbs({lng, ...props }) {
  const { t } = useTranslation(lng);

  return (
    <Box className={classes.breadCrumbs}>
      <Link href="/">{t("Главная")}</Link>
      <span>/</span>
    </Box>
  );
}

export default BreadCrumbs;
