import { useTranslation } from '@/app/i18n/client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CircularProgress,
  TextField,
  useMediaQuery,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import LabelInput from './LabelInput';
import Notificationcontext from '@/context/notification.context';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classes from './styles.module.css';
// import { sendForm } from "@/services/application";
import Image from 'next/image';
import AccordionContent from './AccordionContent';
import PhoneNumber from './phoneNumber';
import { postApplication } from '@/services/application';
import FormContext from '@/context/form.context';

function Form({ lng, ...props }) {
  const { t, i18n } = useTranslation(lng);

  const { form, setForm } = useContext(FormContext);
  const { notify, setNotify } = useContext(Notificationcontext);
  const [loading, setLoading] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const smUp = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  const SERVICES = [
    'Теплые полы',
    'Системы для участка',
    'Кондиционеры',
    'Системы для труб',
    'Системы для крыши',
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      services: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required(t('Имя обязательное поле')),
      phone: Yup.string().required(t('Номер обязательное поле')),
      services: Yup.array().of(Yup.string().oneOf(SERVICES)),
    }),

    validateOnChange: ({}) => {
      formik.values.phone;
    },

    onSubmit: async ({ name, phone, services }) => {
      try {
        setLoading(true);

        const result = await postApplication({
          name,
          phone,
          services,
          lng: lng,
          url: window.location.href,
        });

        setLoading(false);
        if (result.error) {
          return;
        }
        // if (typeof ym === 'function') {
        //   ym(95774498, 'reachGoal', 'form_send');
        // }
        // if (
        //   typeof dataLayer !== "undefined" &&
        //   typeof dataLayer.push === "function"
        // ) {
        //   dataLayer.push({ event: "form_send" });
        // }

        // if (typeof fbq === "function") {
        //   fbq("trackCustom", "form_send");
        // }

        setForm({ open: false });
        setNotify({
          open: true,
          text: t('Спасибо, данные успешно отправлены'),
        });

        formik.resetForm();
      } catch (err) {
        console.log('form error: ', err);
        setLoading(false);
        setNotify({
          open: false,
          text: '',
        });
      }
    },
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit} {...props}>
      <div className={classes.formInputBox}>
        <LabelInput
          label={t('Как вас зовут?')}
          name='name'
          placeholder={t('ФИО')}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.name && formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <PhoneNumber
          label={t('Ваш телефон')}
          value={formik.values.phone}
          formik={formik}
          name='phone'
          helperText={formik.touched.phone && formik.errors.phone}
        />
      </div>

      <AccordionContent
        lng={lng}
        services={SERVICES}
        formik={formik}
        name='services'
      />

      <Button className={classes.submit} disableRipple={true} type='submit'>
        {t('отправить')}
        <Box className={classes.formIconBox}>
          {loading ? (
            <span style={{ transform: 'skew(25deg)' }}>
              <CircularProgress size={20} />
            </span>
          ) : (
            <Image
              src={'/icons/arrow-right.svg'}
              width={18}
              height={15}
              alt={'icon'}
              className={classes.formIcon}
            />
          )}
        </Box>
        {/* {loading && (
          <span style={{ transform: "skew(25deg)" }}>
            <CircularProgress size={20} />
          </span>
        )} */}
      </Button>
    </form>
  );
}

export default Form;
