import { Checkbox, FormControlLabel } from '@mui/material';

import classes from './styles.module.css';
import Image from 'next/image';

export default function CustomCheckbox({ label, value, onChange }) {
  return (
    <FormControlLabel
      className={classes.checkbox}
      control={
        <Checkbox
          icon={
            <Image
              src={'/icons/icon-square.svg'}
              width={12}
              height={12}
              alt={'icon'}
              className={classes.checkboxIcon}
            />
          }
          checkedIcon={
            <Image
              src={'/icons/icon-square-checked.svg'}
              width={12}
              height={12}
              alt={'icon'}
              className={classes.checkboxIcon}
            />
          }
        />
      }
      label={label}
      checked={value}
      onChange={onChange}
    />
  );
}
