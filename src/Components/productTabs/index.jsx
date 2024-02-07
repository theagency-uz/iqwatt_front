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

function ProductTabs({ lng, product, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        padding: "0 50px",
        marginBottom: "80px"
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
                justifyContent: "space-between",
                marginBottom: "15px",
                padding: "0 65px",
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
              label={t("Характеристики")}
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
            <Tab
              label={t("Инструкция")}
              value="3"
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
                  padding: "0 65px",
                  paddingTop: "30px",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.description
                  }}
                  className={classes.editor}
                >
                  {/* {t(item.description)} */}
                </div>
              </TabPanel>
              <TabPanel
                value="2"
                sx={{
                  padding: "0 65px",
                  paddingTop: "30px",
                }}
              >
                <div
                  // dangerouslySetInnerHTML={{
                  //   __html: product.description[i18n.language],
                  // }}
                  className={classes.editor}
                >
                  {t(product.description)}
                </div>
              </TabPanel>
              <TabPanel
                value="3"
                sx={{
                  padding: "0 65px",
                  paddingTop: "30px",
                }}
              >
                <div
                  // dangerouslySetInnerHTML={{
                  //   __html: product.description[i18n.language],
                  // }}
                  className={classes.editor}
                >
                  {t(product.description)}
                </div>
              </TabPanel>
            </Box>
         
      </TabContext>
    </Box>
  );
}

export default ProductTabs;
