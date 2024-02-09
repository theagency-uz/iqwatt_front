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
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        padding: mdUp ? "0 50px" : "0 10px",
        marginBottom: mdUp ? "80px" : "60px",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="product"
            TabIndicatorProps={{ style: { display: "none" } }}
            variant="scrollable"
            sx={{
              "& .Mui-selected": {
                color: "black!important",
              },
              "& .MuiTabs-flexContainer": {
                justifyContent: mdUp ? "space-around" : "space-between",
                marginBottom: mdUp ? "15px" : "0",
                padding: "0",
              },
            }}
          >
            <Tab
              label={t("Описание")}
              value="1"
              sx={{
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "var(--font14)",
                lineHeight: "130%",
                color: "#BFBFBF",
                textTransform: "none",
                lineHeight: "100%",
                padding: 0,
                border: "none",
                minWidth: "auto",
              }}
              disableRipple={true}
            />

            <Tab
              label={t("Инструкция")}
              value="2"
              sx={{
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "var(--font14)",
                lineHeight: "130%",
                color: "#BFBFBF",
                textTransform: "none",
                lineHeight: "100%",
                padding: 0,
                border: "none",
                minWidth: "auto",
              }}
              disableRipple={true}
            />
          </TabList>
        </Box>

        <Box>
          <TabPanel
            value="1"
            sx={{
              padding: mdUp ? "0 65px" : "0",
              paddingTop: mdUp ? "30px" : "15px",
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
              className={classes.editor}
            ></div>
          </TabPanel>

          <TabPanel
            value="2"
            sx={{
              padding: mdUp ? "0 65px" : "0",
              paddingTop: mdUp ? "30px" : "15px",
            }}
          >
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
