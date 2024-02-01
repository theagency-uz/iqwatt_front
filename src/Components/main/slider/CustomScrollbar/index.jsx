import classes from "./styles.module.css";

export default function CustomScrollbar({ scrollbarRef }) {
  return <div className={classes.sliderScrollbar} ref={scrollbarRef}></div>;
}
