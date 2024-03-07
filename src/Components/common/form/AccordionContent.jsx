import { useTranslation } from '@/app/i18n/client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  TextField,
  useMediaQuery,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomCheckbox from './CustomCheckbox';
import classes from './styles.module.css';
import CheckedServices from './checkedServices';

function AccordionContent({ lng, name, formik, services, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Accordion
        // ref={accordionRef}
        expanded={expanded}
        onChange={(e, exp) => setExpanded(exp)}
        disableGutters
        className={classes.accordion}
      >
        <AccordionSummary
          expandIcon={<ChevronRightIcon className={classes.accordionSvg} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          className={classes.accordionSummary}
        >
          {t('Выберите услуги')}
        </AccordionSummary>

        <AccordionDetails className={classes.accordionDetails}>
          {services.map((service) => (
            <div key={service}>
              <CustomCheckbox
                label={t(service)}
                value={formik.values.services.includes(service)}
                onChange={(e, checked) => {
                  formik.setFieldValue(
                    name,
                    checked
                      ? [...formik.values.services, service]
                      : [...formik.values.services.filter((s) => s !== service)]
                  );
                }}
              />
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
      {!expanded && formik.values.services.length > 0 && (
        <CheckedServices formik={formik} services={services} lng={lng} />
      )}
    </>
  );
}

export default AccordionContent;
