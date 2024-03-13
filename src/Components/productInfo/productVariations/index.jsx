import { useTranslation } from '@/app/i18n/client';
import { FormControl, Select, MenuItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
export default ProductVariations;
