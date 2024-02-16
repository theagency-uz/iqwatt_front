"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  useMediaQuery,
} from "@mui/material";

import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";

import classes from "./styles.module.css";
import CalculatorCard from "./calculatorCard";

function Calculator({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);
  const [value, setValue] = useState("installation");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.calculator} id="calculator">
      <Box className={classes.calculatorInner}>
        <Box className={classes.calculatorWrapper}>
          <h3 className={classes.calculatorTitle}>
            {t("Рассчитайте стоимость проекта и экономию")}
          </h3>
          <p className={classes.calculatorText}>
            {t(
              "Воспользуйтесь нашим калькулятором, чтобы расчитать ориентировочную стоимость вашего проекта."
            )}
          </p>

          <FormControl>
            <FormLabel
              id="calculate"
              sx={{
                fontFamily: "Manrope",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "var(--font14)",
                lineHeight: "128.571%",
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              {t("Выберите, что вы хотите рассчитать:")}
            </FormLabel>
            <RadioGroup
              aria-labelledby="calculate"
              name="calculate"
              value={value}
              onChange={handleChange}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0",
                border: "1px solid #FFA152",
                borderRadius: "100px",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                value="installation"
                control={<Radio sx={{ display: "none" }} />}
                label={<Box>{t("установка")}</Box>}
                sx={{
                  margin: 0,
                  width: "50%",

                  "& .MuiFormControlLabel-label ": {
                    padding: "8px 0px",
                    fontFamily: "Manrope",
                    fontSize: "var(--font12)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "150%",
                    letterSpacing: "1.44px",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "0",
                    color: "#fff",
                    width: "100%",
                    textAlign: "center",
                  },
                  "& .Mui-checked + .MuiFormControlLabel-label ": {
                    background: "#FFA152",
                    border: "none",
                    color: "#fff",
                    borderRadius: "100px",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              />
              <FormControlLabel
                value="exploitation"
                control={<Radio sx={{ display: "none" }} />}
                label={<Box>{t("эксплуатация")}</Box>}
                sx={{
                  margin: 0,
                  width: "50%",

                  "& .MuiFormControlLabel-label ": {
                    padding: "8px 0px",
                    fontFamily: "Manrope",
                    fontSize: "var(--font12)",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "150%",
                    letterSpacing: "1.44px",
                    textTransform: "uppercase",
                    border: "none",
                    borderRadius: "0",
                    color: "#fff",
                    width: "100%",
                    textAlign: "center",
                  },
                  "& .Mui-checked + .MuiFormControlLabel-label ": {
                    /* Серый основной */
                    background: "#FFA152",
                    border: "none",
                    color: "#fff",
                    borderRadius: "100px",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  },
                }}
              />
            </RadioGroup>
          </FormControl>
        </Box>


        <CalculatorCard lng={lng} />
      </Box>
    </Box>
  );
}

export default Calculator;