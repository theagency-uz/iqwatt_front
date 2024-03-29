"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Box, Button, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import classes from "./styles.module.css";
import { useTranslation } from "@/app/i18n/client";
import FormContext from "@/context/form.context";
import Link from "next/link";

function StageItem({ lng, stage, nextItemRef, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { form, setForm } = useContext(FormContext);
  const { t, i18n } = useTranslation(lng);

  return (
    <>
      <Box className={classes.stageStepBox}>
        <Image
          src={stage.step}
          width={140}
          height={20}
          alt={"stage-staps"}
          className={classes.stageStep}
        />

        <Image
          src={stage.icon}
          width={38}
          height={38}
          alt={"stage-icon"}
          className={classes.stageGrade}
        />
      </Box>

      <Box className={classes.stageInfo}>
        <h4 className={classes.stageInfoTitle}>{t(stage.title)}</h4>
        <p className={classes.stageInfoText}>{t(stage.text)}</p>
      </Box>

      <Box className={classes.stageBtnBox}>
        {stage.btnText && (
          <Button
            className={classes.stageBtn}
            onClick={() => setForm({ open: true })}
            disableRipple={true}
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
        )}

        {stage.linkText && (
          <Link href={"#calculator"} className={classes.stageLink}>
            {t(stage.linkText)}
            <Box className={classes.stageIconBox}>
              <Image
                src={"/icons/arrow-right.svg"}
                width={18}
                height={15}
                alt={"icon"}
                className={classes.stageIcon}
              />
            </Box>
          </Link>
        )}
      </Box>
    </>
  );
}

export default StageItem;
