"use client";
import React from "react";
import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { NumericFormat } from "react-number-format";

import {
  Box,
  Button,
  useMediaQuery,
  Tab,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import classes from "./styles.module.css";
import FormContext from "@/context/form.context";

function CalculatorCard({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { form, setForm } = useContext(FormContext);

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const cost = 5000;
  const [price, setPrice] = useState();

  let number;

  return (
    <Box
      sx={
        {
          width: mdUp ? "auto" : "100%",
          // typography: "body1",
        }
      }
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="product"
            TabIndicatorProps={{ style: { display: "none" } }}
            variant="scrollable"
            sx={{
              "& .Mui-selected": {
                color: "white!important",
                background: "#FFA152",
              },
              "& .MuiTabs-flexContainer": {
                justifyContent: "space-between",
                margin: "0",
                marginBottom: mdUp ? "0" : "30px",
                flexWrap: mdUp ? "nowrap" : "wrap",
                padding: "0",
              },
            }}
          >
            <Tab
              label={t("теплый пол")}
              value="1"
              sx={{
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "var(--font12)",
                lineHeight: "130%",
                color: "#fff",
                textTransform: "uppercase",
                lineHeight: "130%",
                padding: mdUp ? "0 22px" : "0",
                letterSpacing: "1.44px",
                border: "2px solid #FFA152",
                borderBottom: mdUp ? "none" : "",
                borderRadius: "10px",
                borderBottomLeftRadius: mdUp ? "0" : "10px",
                borderBottomRightRadius: mdUp ? "0" : "10px",
                minWidth: "auto",
                width: mdUp ? "auto" : "100%",
                maxWidth: mdUp ? "auto" : "50%"
              }}
              disableRipple={true}
            />

            <Tab
              label={t("обогрев труб")}
              value="2"
              sx={{
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "var(--font12)",
                lineHeight: "130%",
                color: "#fff",
                textTransform: "uppercase",
                lineHeight: "130%",
                padding: mdUp ? "0 22px" : "0",
                letterSpacing: "1.44px",
                border: "2px solid #FFA152",
                borderBottom: mdUp ? "none" : "",
                borderRadius: "10px",
                borderBottomLeftRadius: mdUp ? "0" : "10px",
                borderBottomRightRadius: mdUp ? "0" : "10px",
                minWidth: "auto",
                width: mdUp ? "auto" : "100%",
                maxWidth: mdUp ? "auto" : "50%"
              }}
              disableRipple={true}
            />

            <Tab
              label={t("система антиобледенения")}
              value="3"
              sx={{
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "var(--font12)",
                lineHeight: "130%",
                color: "#fff",
                textTransform: "uppercase",
                lineHeight: "130%",
                padding: mdUp ? "0 22px" : "0",
                letterSpacing: "1.44px",
                border: "2px solid #FFA152",
                borderBottom: mdUp ? "none" : "",
                borderRadius: "10px",
                borderBottomLeftRadius: mdUp ? "0" : "10px",
                borderBottomRightRadius: mdUp ? "0" : "10px",
                minWidth: "auto",
                width: mdUp ? "auto" : "100%",
                maxWidth: mdUp ? "auto" : "100%"
              }}
              disableRipple={true}
            />
          </TabList>
        </Box>

        <Box
          sx={{
            borderRadius: "10px",
            borderTopLeftRadius: mdUp ? "0" : "10px",
            borderTopRightRadius: mdUp ? "0" : "10px",
            background: "#FFA152",
            padding: mdUp ? "35px" : "30px 15px",
          }}
        >
          <TabPanel
            value="1"
            sx={{
              padding: "0",
              display: "flex",
              flexDirection: "column",
              gap: mdUp ? "50px" : "30px",
            }}
          >
            <Box className={classes.tabPanel}>
              <h4 className={classes.tabPanelTitle}>{t("Теплый пол")}</h4>
              <p className={classes.tabPanelText}>
                {t("Введите данные для расчета:")}
              </p>
            </Box>

            <Box className={classes.tabInputBox}>
              <Box className={classes.tabPanelTextBox}>
                <p className={classes.tabPanelText}>
                  {t("S, площадь помещения")}
                </p>
                <span className={classes.tabPanelDesc}>
                  {t(
                    "без площади с мебелью, система не устанавливается под ней"
                  )}
                </span>
              </Box>

              <Box className={classes.tabInput}>
                <input
                  type="number"
                  // placeholder={t("0")}
                  value={number}
                  onChange={(e) => {
                    number = e.target.value;
                    setPrice(number * cost);
                  }}
                />
                <span className={classes.tabInputMetre}>{t("кв м")}</span>
              </Box>
            </Box>

            <Box className={classes.tabPriceInfo}>
              <Box className={classes.tabPriceBox}>
                <p className={classes.tabPanelText}>{t("Стоимость от:")}</p>
                <p className={classes.tabPanelPrice}>
                  <NumericFormat
                    value={price}
                    displayType="text"
                    thousandSeparator=" "
                    prefix=""
                  />{" "}
                  {t("сум")}
                </p>
              </Box>
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
                {t("оставить заявку")}
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
            </Box>
          </TabPanel>

          <TabPanel
            value="2"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: mdUp ? "50px" : "30px",
              padding: "0",
            }}
          >
            <Box className={classes.tabPanel}>
              <h4 className={classes.tabPanelTitle}>{t("Обогрев труб")}</h4>
              <p className={classes.tabPanelText}>
                {t("Введите данные для расчета:")}
              </p>
            </Box>

            <Box className={classes.tabInputBox}>
              <Box className={classes.tabPanelTextBox}>
                <p className={classes.tabPanelText}>
                  {t("Длинна и радиус трубы ")}
                </p>
                <span className={classes.tabPanelDesc}>
                  {t(
                    "без площади с мебелью, система не устанавливается под ней"
                  )}
                </span>
              </Box>

              <Box className={classes.tabInput}>
                <input
                  type="number"
                  // placeholder={t("0")}
                  value={number}
                  onChange={(e) => {
                    number = e.target.value;
                    setPrice(number * cost);
                  }}
                />
                <span className={classes.tabInputMetre}>{t("кв м")}</span>
              </Box>
            </Box>

            <Box className={classes.tabPriceInfo}>
              <Box className={classes.tabPriceBox}>
                <p className={classes.tabPanelText}>{t("Стоимость от:")}</p>
                <p className={classes.tabPanelPrice}>
                  <NumericFormat
                    value={price}
                    displayType="text"
                    thousandSeparator=" "
                    prefix=""
                  />{" "}
                  {t("сум")}
                </p>
              </Box>
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
                {t("оставить заявку")}
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
            </Box>
          </TabPanel>

          <TabPanel
            value="3"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: mdUp ? "50px" : "30px",
              padding: "0",
            }}
          >
            <Box className={classes.tabPanel}>
              <h4 className={classes.tabPanelTitle}>
                {t("Система антиобледенения")}
              </h4>
              <p className={classes.tabPanelText}>
                {t("Введите данные для расчета:")}
              </p>
            </Box>

            <Box className={classes.tabInputBox}>
              <Box className={classes.tabPanelTextBox}>
                <p className={classes.tabPanelText}>
                  {t("S, площадь обьекта")}
                </p>
                <span className={classes.tabPanelDesc}>
                  {t("поверхность двора или лестницы")}
                </span>
              </Box>

              <Box className={classes.tabInput}>
                <input
                  type="number"
                  // placeholder={t("0")}
                  value={number}
                  onChange={(e) => {
                    number = e.target.value;
                    setPrice(number * cost);
                  }}
                />
                <span className={classes.tabInputMetre}>{t("кв м")}</span>
              </Box>
            </Box>

            <Box className={classes.tabPriceInfo}>
              <Box className={classes.tabPriceBox}>
                <p className={classes.tabPanelText}>{t("Стоимость от:")}</p>
                <p className={classes.tabPanelPrice}>
                  <NumericFormat
                    value={price}
                    displayType="text"
                    thousandSeparator=" "
                    prefix=""
                  />{" "}
                  {t("сум")}
                </p>
              </Box>
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
                {t("оставить заявку")}
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
            </Box>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}

export default CalculatorCard;
