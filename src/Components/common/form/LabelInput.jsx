import { TextField } from "@mui/material";

import classes from "./styles.module.css";
export default function LabelInput({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  placeholder,
  type,
  ...props
}) {
  return (
    <label>
      <p className={classes.label}>{label}</p>

      <TextField
        color="#fff"
        variant="standard"
        // name={name}
        // id={name}
        // value={value}
        // onChange={onChange}
        // onBlur={onBlur}
        // error={error}
        // helperText={helperText}
        fullWidth
        className={`${classes.input} ${
          type === "textarea" ? classes.textarea : ""
        }`}
        InputProps={{ disableUnderline: true }}
        placeholder={placeholder}
        rows={5}
        maxRows={Infinity}
        multiline={type === "textarea"}
      />
    </label>
  );
}
