"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";
import { useContext, useRef, useState } from "react";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import { NumericFormat } from "react-number-format";

function Contacts({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  const cost = 5000;
  const [price, setPrice] = useState();

  let number;

  return (
    <Box className={classes.contacts}>
      <Box className={classes.contactsWrapper}>
        <Title title={"Свяжитесь \n с нами"} />

        <Box className={classes.contactsInfo}>
          <p className={classes.contactsText}>
            {t(
              "Полное сопровождение проекта - фотоотчеты каждую неделю и выезды на строительные обьекты"
            )}
          </p>
          <Link href={"/"} className={classes.contactsLink}>
            {t("telegram")}
            <Box className={classes.contactsIconBox}>
              <Image
                src={"/icons/arrow-right.svg"}
                width={18}
                height={15}
                alt={"icon"}
                className={classes.contactsIcon}
              />
            </Box>
          </Link>
        </Box>
      </Box>

      {/* <input
        type="number"
        placeholder={t("10 000 сум")}
        value={number}
        onChange={(e) => {
          number = e.target.value;
          setPrice(number * cost);
        }}
      />

      <p>
        <NumericFormat
          value={price}
          displayType="text"
          thousandSeparator=" "
          prefix=""
        />{" "}
        {t("сум")}
      </p> */}
    </Box>
  );
}

export default Contacts;
