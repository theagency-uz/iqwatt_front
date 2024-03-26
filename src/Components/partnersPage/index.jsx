'use client';
import { useTranslation } from '@/app/i18n/client';
import { Box, Button, useMediaQuery } from '@mui/material';
import React, { useContext } from 'react';
import classes from './styles.module.css';
import Image from 'next/image';
import Contacts from '@component/main/contacts';
import InfoCard from '../common/infoCard';
import FormContext from '@/context/form.context';
import InfoWrapper from '../common/infoWrapper';
import Portfolio from '../main/portfolio';
import SliderImages from './sliderImages';


function PartnersPage({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { form, setForm } = useContext(FormContext);

  return (
    <>
      <Box className={classes.partnersInner}>
        <Box className={classes.partnersImgBox}>
          <Image
            src={'/static/site/partner-img.png'}
            width={570}
            height={385}
            alt={'image'}
            className={classes.partnersImg}
          />
        </Box>

        <Box className={classes.partnersInfo}>
          <h4 className={classes.partnersTitle}>{t('Партнерам')}</h4>
          <Box className={classes.partnersTextBox}>
            <p className={classes.partnersText}>
              {t(
                'Приглашаем стать нашими партнёрами торговые компании, заинтересованные в нашем продукте, а также дизайнеров помещений, строительные бригады, профессиональных электриков.'
              )}
            </p>
            <br />
            <p className={classes.partnersText} style={{ color: '#000' }}>
              {t(
                'Для наших Партнёров мы разработали особую Программу лояльности IQWATT, предусматривающую специальные финансовые условия, скидки и бонусы.'
              )}
            </p>
          </Box>
          <Button
            className={classes.stageBtn}
            onClick={() => setForm({ open: true })}
            disableRipple={true}
          >
            {t('оставить заявку')}
            <Box className={classes.stageIconBox}>
              <Image
                src={'/icons/arrow-right.svg'}
                width={18}
                height={15}
                alt={'icon'}
                className={classes.stageIcon}
              />
            </Box>
          </Button>
        </Box>
      </Box>

      <InfoCard lng={lng} title={'Мы уверены в качестве нашей продукции:'} />

      <Box className={classes.partnersInfoBox}>
        <InfoWrapper
          lng={lng}
          title={t('IQ WATT -- надежный \n международный партнер')}
          text={t(
            'IQWATT сформировал команду целеустремлённых людей, отладил систему поставок, создал высокую культуру партнёрских отношений. Мы сконцентрированы на том, чтобы идти у к успеху совместно с нашими партнёрами.'
          )}
        />
      </Box>

      <SliderImages lng={lng} />

      <Portfolio lng={lng} />
      <Contacts lng={lng} />
    </>
  );
}

export default PartnersPage;
