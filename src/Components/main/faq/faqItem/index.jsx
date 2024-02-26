import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classes from './styles.module.css';
import { useTranslation } from '@/app/i18n/client';

export default function FaqItem({ item, expanded, handleChange, index, lng }) {
  const { t, i18n } = useTranslation(lng);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  return (
    <Accordion
      key={item.id}
      expanded={expanded === `panel${index}`}
      onChange={handleChange(`panel${index}`)}
      className={classes.accordion}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            style={{
              color: 'rgba(255, 129, 20, 1)',
              width: mdUp ? '50px' : '40px',
              height: mdUp ? '50px' : '40px',
            }}
          />
        }
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.accordionSummary}
      >
        <Typography className={classes.title}>
          {item.id}. {t(item.title)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <Typography className={classes.text}>{t(item.text)}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
