'use client';
import React, { useState } from 'react';
import classes from './styles.module.css';
import { Box, useMediaQuery } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useTranslation } from '@/app/i18n/client';
import faqData from '@/data/faqData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaqItem from './faqItem';

function FaqAccordion({ lng, isOpen, setIsOpen, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {faqData?.map((item, index) => {
        return (
          <FaqItem
            item={item}
            key={item.id}
            expanded={expanded}
            handleChange={handleChange}
            index={index}
            lng={lng}
          />
        );
      })}
    </Box>
  );
}

export default FaqAccordion;
