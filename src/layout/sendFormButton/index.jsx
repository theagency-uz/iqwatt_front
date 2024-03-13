import React from 'react';

import { Button } from '@mui/material';
import { useContext } from 'react';
import FormContext from '@/context/form.context';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';

export default function SendFormButton({ className = '', lng, ...props }) {
  const { form, setForm } = useContext(FormContext);

  const { t } = useTranslation(lng);
  return (
    <Button
      className={`${classes.navbarBtn} ${className}`}
      onClick={() => setForm({ open: true })}
      disableRipple={true}
      {...props}
    >
      {t('оставить заявку')}
    </Button>
  );
}
