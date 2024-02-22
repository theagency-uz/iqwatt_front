"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Termo from "../common/termo";

function CatalogPage({ lng, product, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <>
      {product.map((product, index) => {
        return (
          <Box key={product.id} className={classes.catalog}>
            {product.categoryTitle && (
              <h3 className={classes.catalogMainTitle}>
                {t(product.categoryTitle)}
              </h3>
            )}
            <h4 className={classes.catalogTitle}>
              {t(product.subCategoryTitle)}
            </h4>
            <ul className={classes.catalogList}>
              <a
                href={`/catalog/${product.id}`}
                className={classes.catalogItem}
              >
                <Box className={classes.catalogItemBox}>
                  <Box className={classes.catalogWrapper}>
                    <p className={classes.catalogName}>{t(product.title)}</p>
                    <Link
                      href={`/catalog/${product.id}`}
                      className={classes.catalogItemLink}
                    >
                      {t("смотреть")}
                      <Box className={classes.catalogItemIconBox}>
                        <Image
                          src={"/icons/arrow-right-white.svg"}
                          width={18}
                          height={15}
                          alt={"icon"}
                          className={classes.catalogIcon}
                        />
                      </Box>
                    </Link>
                  </Box>

                  <Box className={classes.catalogImgBox}>
                    <Image
                      src={product.image}
                      width={194}
                      height={194}
                      alt={"catalog-image"}
                      className={classes.catalogImg}
                    />
                  </Box>
                </Box>

                <p className={classes.catalogText}>{t(product.text)}</p>
              </a>
            </ul>
          </Box>
        );
      })}

      <Termo lng={lng} />
    </>
  );
}

export default CatalogPage;
