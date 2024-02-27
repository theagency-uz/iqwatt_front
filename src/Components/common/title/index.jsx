import classes from './styles.module.css';

function Title({ title }) {
  return <h3 className={classes.title}>{title}</h3>;
}

export default Title;
