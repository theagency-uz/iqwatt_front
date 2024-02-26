import { Checkbox, FormControlLabel } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./styles.module.css";
import Image from "next/image";

export default function CustomCheckbox({ label, value, onChange }) {
  return (
    <FormControlLabel
      className={classes.checkbox}
      control={
        <Checkbox
          icon={
            <Image
              src={"/icons/icon-square.svg"}
              width={12}
              height={12}
              alt={"icon"}
              className={classes.checkboxIcon}
            />
          }
          checkedIcon={
            <Image
              src={"/icons/icon-square-checked.svg"}
              width={12}
              height={12}
              alt={"icon"}
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
