import { Checkbox, FormControlLabel } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./styles.module.css";

export default function CustomCheckbox({ label, value, onChange }) {
  return (
    <FormControlLabel
      className={classes.checkbox}
      control={
        <Checkbox
          icon={<i className={`icon-square`}></i>}
          checkedIcon={<i className={`icon-square-checked`}></i>}
        />
      }
      sx={{
        color: "#EDEDED",
      }}
      label={label}
      checked={value}
      onChange={onChange}
    />
  );
}
