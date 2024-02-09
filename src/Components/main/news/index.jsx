"use client";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import NewsMobi from "./newsMobi";
import NewsDesk from "./newsDesk";

function News({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  if (mdUp) {
    return <NewsDesk lng={lng} />;
  }
  return <NewsMobi lng={lng} />;
}

export default News;
