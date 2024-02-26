import { useTranslation } from "@/app/i18n/client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomCheckbox from "./CustomCheckbox";
import classes from "./styles.module.css";

function ProductAccordion({ lng, footage, ...props }) {
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
        expandIcon={<ChevronRightIcon className={classes.accordionIcon} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className={classes.accordionSummary}
      >
        {t("Выбрать метраж")}
      </AccordionSummary>

      <AccordionDetails className={classes.accordionDetails}>
        {footage.map((item, index) => {
          return (
            <div key={index}>
              <CustomCheckbox
                label={t(item)}
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
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export default ProductAccordion;
