"use client";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";

import ReviewsMobi from "./reviewsMobi";
import ReviewsDesk from "./reviewsDesk";

function VideosContent({ lng, videos, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  if (mdUp) {
    return <ReviewsDesk lng={lng} videos={videos} />;
  }

  return <ReviewsMobi lng={lng} videos={videos} />;
}

export default VideosContent;
