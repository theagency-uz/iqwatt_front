import React from 'react';
import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';

function Title({ title }) {
  return <h3 className={classes.title}>{title}</h3>;
}

export default Title;
