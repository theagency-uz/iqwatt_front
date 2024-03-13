'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  useMediaQuery,
} from '@mui/material';

import { useTranslation } from '@/app/i18n/client';
import { useContext, useRef, useState } from 'react';

import classes from './styles.module.css';
import CalculatorCard from './calculatorCard';

function Calculator({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { t, i18n } = useTranslation(lng);
  const [value, setValue] = useState('installation');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.calculator} id='calculator'>
      <Box className={classes.calculatorInner}>
        <Box className={classes.calculatorWrapper}>
          <h3 className={classes.calculatorTitle}>
            {t('Рассчитайте стоимость проекта и экономию')}
          </h3>
          <p className={classes.calculatorText}>
            {t(
              'Воспользуйтесь нашим калькулятором, чтобы расчитать ориентировочную стоимость вашего проекта.'
            )}
          </p>

          <FormControl>
            <FormLabel id='calculate' className={classes.formLabel}>
              {t('Выберите, что вы хотите рассчитать:')}
            </FormLabel>
            <RadioGroup
              aria-labelledby='calculate'
              name='calculate'
              value={value}
              onChange={handleChange}
              className={classes.radioGroup}
            >
              <FormControlLabel
                value='installation'
                control={<Radio className={classes.radioControl} />}
                label={<Box>{t('установка')}</Box>}
                className={classes.formControlLabelLeft}
              />
              <FormControlLabel
                value='exploitation'
                control={<Radio className={classes.radioControl} />}
                label={<Box>{t('эксплуатация')}</Box>}
                className={classes.formControlLabelRight}
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
