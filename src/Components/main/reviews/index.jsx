"use client";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";

import ReviewsMobi from "./reviewsMobi";
import ReviewsDesk from "./reviewsDesk";

function Reviews({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  if (mdUp) {
    return <ReviewsDesk lng={lng} />;
  }

  return <ReviewsMobi lng={lng} />;
}

export default Reviews;
