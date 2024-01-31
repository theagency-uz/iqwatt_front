import { useTranslation } from "@/app/i18n/client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomCheckbox from "./CustomCheckbox";
import classes from "./styles.module.css";

function AccordionContent({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const [expanded, setExpanded] = useState(true);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  
  return (
    <Accordion
      // ref={accordionRef}
      expanded={expanded}
      onChange={(e, exp) => setExpanded(exp)}
      disableGutters
      className={classes.accordion}
    >
      <AccordionSummary
        expandIcon={
          <ChevronRightIcon
            sx={{
              position: "relative",
              top: lgUp ? "2px" : "1px",
              color: "#FF8115",
              fontSize: "var(--font24)",
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          padding: "11px 15px",
          backgroundColor: "#fff",
          borderRadius: "5px",
          flexGrow: 0,
          minHeight: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Manrope",
          gap: "7px",
          "& .MuiAccordionSummary-content": {
            flexGrow: 0,
            margin: "0",
            color: "#8E8E8E",
            fontFamily: "Manrope",
            fontSize: "var(--font14)",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "18px",
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
            position: "relative",
            top: lgUp ? "2px" : "1px",
            left: lgUp ? "2px" : "1px",
          },
        }}
      >
        {t("Выберите услуги")}
      </AccordionSummary>

      <AccordionDetails className={classes.accordionDetails}>
        <div>
          <CustomCheckbox
            label={t("Теплые полы")}
            // value={formik.values.services.includes(SERVICES[0])}
            // onChange={(e, checked) => {
            //   formik.setFieldValue(
            //     "services",
            //     checked
            //       ? [...formik.values.services, SERVICES[0]]
            //       : [...formik.values.services.filter((s) => s !== SERVICES[0])]
            //   );
            // }}
          />
        </div>
        <div>
          <CustomCheckbox
            label={t("Системы для участка")}
            // value={formik.values.services.includes(SERVICES[1])}
            // onChange={(e, checked) => {
            //   formik.setFieldValue(
            //     "services",
            //     checked
            //       ? [...formik.values.services, SERVICES[1]]
            //       : [...formik.values.services.filter((s) => s !== SERVICES[1])]
            //   );
            // }}
          />
        </div>
        <div>
          <CustomCheckbox
            label={t("Кондиционеры")}
            // value={formik.values.services.includes(SERVICES[2])}
            // onChange={(e, checked) => {
            //   formik.setFieldValue(
            //     "services",
            //     checked
            //       ? [...formik.values.services, SERVICES[2]]
            //       : [...formik.values.services.filter((s) => s !== SERVICES[2])]
            //   );
            // }}
          />
        </div>
        <div>
          <CustomCheckbox
            label={t("Системы для труб")}
            // value={formik.values.services.includes(SERVICES[3])}
            // onChange={(e, checked) => {
            //   formik.setFieldValue(
            //     "services",
            //     checked
            //       ? [...formik.values.services, SERVICES[3]]
            //       : [...formik.values.services.filter((s) => s !== SERVICES[3])]
            //   );
            // }}
          />
        </div>
        <div>
          <CustomCheckbox
            label={t("Системы для крыш")}
            // value={formik.values.services.includes(SERVICES[3])}
            // onChange={(e, checked) => {
            //   formik.setFieldValue(
            //     "services",
            //     checked
            //       ? [...formik.values.services, SERVICES[3]]
            //       : [...formik.values.services.filter((s) => s !== SERVICES[3])]
            //   );
            // }}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AccordionContent;
