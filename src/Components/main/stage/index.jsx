"use client";
import { Box, useMediaQuery } from "@mui/material";
import StageDesk from "./stageDesk";
import StageMobi from "./stageMobi";

function Stage({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  if (mdUp) {
    return <StageDesk lng={lng} />;
  }
  return <StageMobi lng={lng} />;
}

export default Stage;
