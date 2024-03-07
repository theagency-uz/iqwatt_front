'use client';
import { Box, useMediaQuery } from '@mui/material';
import Title from '@/Components/common/title';
import { useTranslation } from '@/app/i18n/client';
import FaqAccordion from './faqAccordion';

import classes from './styles.module.css';
import { useEffect, useState } from 'react';
import { getFaq } from '@/services/faq';

function Faq({ lng, isOpen, setIsOpen, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const [faq, setFaq] = useState();

  useEffect(() => {
    async function fetchAll() {
      const tempFaq = await getFaq({ lng, limit: 10, page: 1 });
      setFaq(tempFaq);
    }
    fetchAll();
  }, [lng]);

  return (
    <Box className={classes.faq}>
      <Box className={classes.faqInner}>
        <Title title={t('Ответы \n на частые вопросы')} />
        {/* <p className={classes.faqText}>
          {t(
            "Собрали самые популярные вопросы от наших покупателей и подробно ответили на них"
          )}
        </p> */}
      </Box>

      <FaqAccordion lng={lng} isOpen={isOpen} setIsOpen={setIsOpen} faq={faq} />
    </Box>
  );
}

export default Faq;
