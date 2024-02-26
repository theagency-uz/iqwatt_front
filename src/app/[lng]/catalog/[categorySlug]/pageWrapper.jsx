"use client";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import productData from "@/data/productData";
import Image from "next/image";
import CatalogPage from "@/Components/catalogPage";
import Portfolio from "@/Components/main/portfolio";
import classes from "./styles.module.css";

function PageWrapper({ lng, ...props }) {
  const { t } = useTranslation(lng);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const [product, setProduct] = useState(productData);

  return (
    <>
      <Box className={classes.productInfo}>
        <Box className={classes.productWrapper}>
          <Title title={"Каталог"} lng={lng} />
          <span className={classes.border}></span>
        </Box>

        <Box className={classes.productBannerBox}>
          <Box className={classes.productBannerWrapper}>
            <h3 className={classes.productBannerTitle}>{t("Теплые полы")}</h3>
          </Box>
          <Box className={classes.productImgBox}>
            <Image
              src={"/images/category/category1.webp"}
              width={461}
              height={324}
              alt={"product-image"}
              className={classes.productBannerImg}
            />
          </Box>
        </Box>

        <CatalogPage lng={lng} product={product} />
      </Box>

      <Portfolio lng={lng} />
    </>
  );
}

export default PageWrapper;
