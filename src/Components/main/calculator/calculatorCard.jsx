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
import FormContext from "@/context/form.context";

import classes from "./styles.module.css";

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
    <Box className={classes.tabMainBox}>
      <TabContext value={value}>
        <Box className={classes.tabContextBox}>
          <TabList
            onChange={handleChange}
            aria-label="product"
            TabIndicatorProps={{ style: { display: "none" } }}
            variant="scrollable"
            className={classes.tabList}
          >
            <Tab
              label={t("теплый пол")}
              value="1"
              disableRipple={true}
              className={classes.tabLabel}
            />

            <Tab
              label={t("обогрев труб")}
              value="2"
              className={classes.tabLabel}
              disableRipple={true}
            />

            <Tab
              label={t("система антиобледенения")}
              value="3"
              className={classes.tabLabelThird}
              disableRipple={true}
            />
          </TabList>
        </Box>

        <Box className={classes.tabPanelMain}>
          <TabPanel value="1" className={classes.tabPanelWrapper}>
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

          <TabPanel value="2" className={classes.tabPanelWrapper}>
            <Box className={classes.tabPanel}>
              <h4 className={classes.tabPanelTitle}>{t("Обогрев труб")}</h4>
              <p className={classes.tabPanelText}>
                {t("Введите данные для расчета:")}
              </p>
            </Box>

            <Box className={classes.tabInputBox}>
              <Box className={classes.tabPanelTextBox}>
                <p className={classes.tabPanelText}>
                  {t("Длинна и радиус трубы")}
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

          <TabPanel value="3" className={classes.tabPanelWrapper}>
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
