"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import FormContext from "@/context/form.context";

function StageItem({ lng, stage, nextItemRef, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { form, setForm } = useContext(FormContext);
  const { t, i18n } = useTranslation(lng);

  return (
    <>
      <Box className={classes.stageStepBox}>
        <Image
          src={stage.step}
          width={110}
          height={20}
          alt={"stage-staps"}
          className={classes.stageStep}
        />

        <Image
          src={"/icons/grade.svg"}
          width={38}
          height={38}
          alt={"stage-grade"}
          className={classes.stageGrade}
        />
      </Box>

      <Box className={classes.stageInfo}>
        <h4 className={classes.stageInfoTitle}>{t(stage.title)}</h4>
        <p className={classes.stageInfoText}>{t(stage.text)}</p>
      </Box>

      <Box className={classes.stageBtnBox}>
        <Button
          className={classes.stageBtn}
          onClick={() => setForm({ open: true })}
          disableRipple={true}
          sx={{
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          {t(stage.btnText)}
          <Box className={classes.stageIconBox}>
            <Image
              src={"/icons/arrow-right.svg"}
              width={18}
              height={15}
              alt={"icon"}
              className={classes.stageIcon}
            />
          </Box>
        </Button>

        <Button
          aria-label="вперед"
          className={classes.btnNext}
          ref={nextItemRef}
          sx={{
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </>
  );
}

export default StageItem;
