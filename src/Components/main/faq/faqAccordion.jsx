'use client';
import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import faqData from '@/data/faqData';
import FaqItem from './faqItem';

import classes from './styles.module.css';

function FaqAccordion({ lng, isOpen, setIsOpen, faq, ...props }) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      {faq ? (
        faq?.map((item, index) => {
          return (
            <FaqItem
              item={item.attributes}
              key={item.id}
              expanded={expanded}
              handleChange={handleChange}
              index={index}
              lng={lng}
            />
          );
        })
      ) : (
        <Box className={classes.loaderWrapper}>
          {[...Array(4).keys()].map((v, index) => (
            <Skeleton
              key={index}
              variant='rounded'
              className={classes.loaderItem}
              height={150}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default FaqAccordion;
