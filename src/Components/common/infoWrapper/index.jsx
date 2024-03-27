import classes from './styles.module.css';
import Title from '@/Components/common/title';

const infoData = [
  { number: '10', text: 'лет на международном рынке' },
  { number: '>100', text: 'установленных систем' },
  { number: '25', text: 'до 25 лет гарантии на наши системы' },
  { number: '>200', text: 'положительных отзывов' },
];

function InfoWrapper({ lng, title, text, ...props }) {
  return (
    <div className={classes.info}>
      <div className={classes.infoWrapper}>
        <Title title={title} />
        <span className={classes.border}></span>
        <p className={classes.infoText}>{text}</p>
      </div>

      <ul className={classes.infoList}>
        {infoData.map((item, index) => {
          return (
            <li className={classes.infoItem} key={index}>
              <span className={classes.infoNumber}>{item.number}</span>
              <span className={classes.infoItemText}>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfoWrapper;
