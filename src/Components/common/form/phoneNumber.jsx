import classes from "./styles.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumber({
  label,
  phoneNumber,
  handleChange,
  valid,
  ...props
}) {

  return (
    <>
      <label className={classes.number}>
        <p className={classes.label}>{label}</p>
        <PhoneInput
          country={"uz"}
          value={phoneNumber}
          onChange={handleChange}
          placeholder="+9989 (94) 999-99-99"
          inputProps={{
            required: true,
          }}
        />
      </label>
      {!valid && <p className={classes.helperText}></p>}
    </>
  );
}
