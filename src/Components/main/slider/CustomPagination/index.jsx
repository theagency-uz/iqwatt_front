import classes from "./styles.module.css";

export default function CustomPagination({ paginationRef }) {
  return <div className={classes.sliderPagination} ref={paginationRef}></div>;
}
