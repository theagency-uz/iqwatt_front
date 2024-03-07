import { useTranslation } from '@/app/i18n/client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CustomCheckbox from './CustomCheckbox';
import classes from './styles.module.css';

function ProductVariations({
  lng,
  variations,
  selectedVariation,
  setSelectedVariation,
  ...props
}) {
  const { t, i18n } = useTranslation(lng);

  return (
    <FormControl
      sx={{
        width: 'fit-content',

        background: '#fff',
        '& fieldset': {
          border: 'none',
          borderRadius: '5px',
          overflow: 'hidden',
        },
      }}
      className={classes.wrapper}
    >
      {/* <InputLabel id='variation-select-label'>{t('Выбрать метраж')}</InputLabel> */}
      <Select
        // labelId='variation-select-label'
        id='variation-select'
        value={selectedVariation}
        label={t('Выбрать метраж')}
        onChange={(e) => setSelectedVariation(e.target.value)}
        IconComponent={(props) => (
          <KeyboardArrowDownIcon
            className={`${classes.icon} ${props.className}`}
          />
        )}
        className={classes.select}
        displayEmpty
      >
        <MenuItem className={classes.variationItem} disabled value=''>
          {t('Выбрать метраж')}
        </MenuItem>
        {variations.map((variation) => (
          <MenuItem
            value={variation.id}
            key={variation.id}
            className={classes.variationItem}
          >
            <CustomRadio checked={selectedVariation === variation.id} />
            <span>{variation.value}</span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const CustomRadio = ({ checked = false }) => {
  return (
    <div className={classes.radio}>
      {checked && <span className={classes.radioChecked}></span>}
    </div>
  );
};
{
  /* <Accordion
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
  {variations.map((item, index) => {
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
</Accordion> */
}

export default ProductVariations;
