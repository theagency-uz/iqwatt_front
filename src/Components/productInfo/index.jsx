"use client";
import { useTranslation } from "@/app/i18n/client";
import { Box, Button, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import classes from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import ProductAbout from "./productAbout";
import ProductAccordion from "./productAccordion";
import FormContext from "@/context/form.context";

function ProductInfo({ lng, product, ...props }) {
  const { t } = useTranslation(lng);
  const { form, setForm } = useContext(FormContext);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <Box className={classes.productBox}>
      <Box key={product.id} className={classes.productWrapper}>
        <h3 className={classes.productTitle}>{t(product.title)}</h3>
        {product.footage && (
          <ProductAccordion footage={product.footage} lng={lng} />
        )}
        <ProductAbout
          lng={lng}
          series={product.series}
          packaging={product.packaging}
          weight={product.weight}
          length={product.length}
          sectionPower={product.sectionPower}
          pipelinePower={product.pipelinePower}
          mounting={product.mounting}
          cableType={product.cableType}
          category={product.category}
        />
        <Button
          className={classes.productBtn}
          onClick={() => setForm({ open: true })}
          disableRipple={true}
        >
          {t("оставить заявку")}
          <Box className={classes.productIconBox}>
            <Image
              src={"/icons/arrow-right.svg"}
              width={18}
              height={15}
              alt={"icon"}
              className={classes.productIcon}
            />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

export default ProductInfo;
