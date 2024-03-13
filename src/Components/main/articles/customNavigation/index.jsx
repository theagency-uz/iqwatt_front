import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import classes from "./styles.module.css";

export default function CustomNavigation({ prevRef, nextRef }) {
  return (
    <div className={classes.sliderNavigation}>
      <Button aria-label="назад" className={classes.btnPrev} ref={prevRef}>
        <ArrowBackIosNewIcon />
      </Button>
      <Button aria-label="вперед" className={classes.btnNext} ref={nextRef}>
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}
