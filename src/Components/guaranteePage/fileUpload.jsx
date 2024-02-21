"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./styles.module.css";

function FileUpload({ name, lng, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const fileRef = useRef(null);

  const [input, setInput] = useState();
  function handleClick() {
    fileRef.current.click();
  }
  return (
    <Box className={classes.uploadBox}>
      <input
        type="file"
        ref={fileRef}
        hidden
        name={name}
        accept="image/*,video/*"
        onChange={(e) => {
          setInput(e.target.files?.[0].name || "");
        }}
      />
      <Button
        onClick={handleClick}
        className={classes.uploadBtn}
        disableRipple={true}
      >
        {t("добавить файлы")}
        <Box className={classes.uploadIconBox}>
          <Image
            src={"/icons/arrow-right.svg"}
            width={18}
            height={15}
            alt={"icon"}
            className={classes.uploadIcon}
          />
        </Box>
      </Button>
      <p className={classes.cardText}>{input || ""}</p>
    </Box>
  );
}

export default FileUpload;
