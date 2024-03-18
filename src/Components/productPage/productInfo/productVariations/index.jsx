import { useTranslation } from '@/app/i18n/client';
import { FormControl, Select, MenuItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import classes from './styles.module.css';

const TYPES = ['Длина', 'Мощность', 'Цвет', 'Резьба'];

function ProductVariations({
  lng,
  variations,
  selectedVariation,
  setSelectedVariation,
  ...props
}) {
  const { t, i18n } = useTranslation(lng);

  console.log(variations[0].type);

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
          {variations[0].type === TYPES[0] && t('Выбрать метраж')}
          {variations[0].type === TYPES[1] && t('Выбрать мощность')}
          {variations[0].type === TYPES[2] && t('Выбрать цвет')}
          {variations[0].type === TYPES[3] && t('Выбрать резьбу')}
        </MenuItem>
        {variations.map((variation) => (
          <MenuItem
            value={variation.id}
            key={variation.id}
            className={classes.variationItem}
          >
            <CustomRadio checked={selectedVariation === variation.id} />

            {/* Длина */}
            {variation.type === TYPES[0] && <span>{variation.value}</span>}

            {/* Мощность */}
            {variation.type === TYPES[1] && <span>{variation.value}</span>}

            {/* Цвет */}
            {variation.type === TYPES[2] && (
              <div className={classes.colorWrapper}>
                <span
                  className={classes.color}
                  style={{ backgroundColor: variation.value.split('-')[0] }}
                ></span>
                {variation.value.split('-')[1]}
              </div>
            )}

            {/* Резьба */}
            {variation.type === TYPES[3] && <span>{variation.value}</span>}
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
