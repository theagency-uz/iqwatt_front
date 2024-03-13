import classes from './styles.module.css';

export default function EditorContent({ content }) {
  return (
    <div
      className={classes.editor}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
}
