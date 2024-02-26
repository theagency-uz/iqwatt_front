'use client';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import faqData from '@/data/faqData';
import FaqItem from './faqItem';

function FaqAccordion({ lng, isOpen, setIsOpen, ...props }) {

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
