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
  const [expanded, setExpanded] = useState(false);
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
        expandIcon={<ChevronRightIcon className={classes.accordionSvg} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordionSummary}
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
            label={t("Системы для крыши")}
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
