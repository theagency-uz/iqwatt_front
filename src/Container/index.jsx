import classes from './styles.module.css';
export default function Container({ children, className = '', ...props }) {
  return (
    <div className={`${classes.container} ${className}`} {...props}>
      {children}
    </div>
  );
}
