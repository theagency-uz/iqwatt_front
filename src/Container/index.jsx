import classes from './styles.module.css';
export default function Container({ children, ...props }) {
  return (
    <div className={classes.container} {...props}>
      {children}
    </div>
  );
}
