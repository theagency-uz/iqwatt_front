"use client";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import PortfolioDesk from "./portfolioDesk";
import PortfolioMobi from "./portfolioMobi";

function Portfolio({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  if (mdUp) {
    return <PortfolioDesk lng={lng} />;
  }
  return <PortfolioMobi lng={lng} />;
}

export default Portfolio;
