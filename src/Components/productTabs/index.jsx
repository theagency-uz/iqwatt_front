'use client';
import { useTranslation } from '@/app/i18n/client';
import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  useMediaQuery,
  Tab,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import classes from './styles.module.css';
import { strapiImageUrl } from '@/utils/endpoints';

function ProductTabs({ lng, product, ...props }) {
  const { t, i18n } = useTranslation(lng);

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.tabMain}>
      <TabContext value={value}>
        <Box className={classes.tabContext}>
          <TabList
            onChange={handleChange}
            aria-label='product'
            TabIndicatorProps={{
              style: {
                backgroundColor: '#ff8115',
              },
            }}
            variant='standard'
            className={classes.tabList}
          >
            <Tab
              label={t('Описание')}
              value='1'
              className={classes.tabLabel}
              disableRipple={true}
            />

            <Tab
              label={t('Инструкция')}
              value='2'
              className={classes.tabLabel}
              disableRipple={true}
            />
          </TabList>
        </Box>

        <Box>
          <TabPanel value='1' className={classes.tabPanel}>
            <div className={classes.editor}>
              <BlocksRenderer content={product.description} />
            </div>
          </TabPanel>

          <TabPanel value='2' className={classes.tabPanel}>
            <div
              // dangerouslySetInnerHTML={{
              //   __html: product.description[i18n.language],
              // }}
              className={classes.editorBox}
            >
              {product.instruction.data && (
                <>
                  <Box className={classes.editorInner}>
                    <Image
                      src={'/icons/training-icon.svg'}
                      width={17}
                      height={17}
                      alt={'icon'}
                      className={classes.editorCircleIcon}
                    />
                    <p className={classes.editor}>
                      {product.instruction?.data?.attributes.name ?? ''}
                    </p>
                  </Box>

                  <a
                    href={
                      strapiImageUrl + product.instruction?.data?.attributes.url
                    }
                    download={product.instruction.data.attributes.name}
                    className={classes.editorLink}
                  >
                    <span>{t('скачать')}</span>
                    <Box className={classes.editorIconBox}>
                      <Image
                        src={'/icons/arrow-right-white.svg'}
                        width={15}
                        height={13}
                        alt={'icon'}
                        className={classes.editorIcon}
                      />
                    </Box>
                  </a>
                </>
              )}
            </div>
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}

export default ProductTabs;
