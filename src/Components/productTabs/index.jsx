"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  useMediaQuery,
  Tab,
  Typography,
  useTheme,
} from "@mui/material";
import classes from "./styles.module.css";
import Image from "next/image";

function ProductTabs({ lng, product, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.tabMain}>
      <TabContext value={value}>
        <Box className={classes.tabContext}>
          <TabList
            onChange={handleChange}
            aria-label="product"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#ff8115",
              },
            }}
            variant="scrollable"
            className={classes.tabList}
          >
            <Tab
              label={t("Описание")}
              value="1"
              className={classes.tabLabel}
              disableRipple={true}
            />

            <Tab
              label={t("Инструкция")}
              value="2"
              className={classes.tabLabel}
              disableRipple={true}
            />
          </TabList>
        </Box>

        <Box>
          <TabPanel value="1" className={classes.tabPanel}>
            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
              className={classes.editor}
            ></div>
          </TabPanel>

          <TabPanel value="2" className={classes.tabPanel}>
            <div
              // dangerouslySetInnerHTML={{
              //   __html: product.description[i18n.language],
              // }}
              className={classes.editorBox}
            >
              <Box className={classes.editorInner}>
                <Image
                  src={"/icons/training-icon.svg"}
                  width={17}
                  height={17}
                  alt={"icon"}
                  className={classes.editorCircleIcon}
                />
                <p className={classes.editor}>{t(product.editorText)}</p>
              </Box>

              <a
                href="./directory/yourfile.pdf"
                download="newfilename"
                className={classes.editorLink}
              >
                <span>{t("скачать")}</span>
                <Box className={classes.editorIconBox}>
                  <Image
                    src={"/icons/arrow-right-white.svg"}
                    width={15}
                    height={13}
                    alt={"icon"}
                    className={classes.editorIcon}
                  />
                </Box>
              </a>
            </div>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}

export default ProductTabs;
