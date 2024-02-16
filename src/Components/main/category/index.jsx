"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";

import classes from "./styles.module.css";
import Title from "@/Components/common/title";
import categoryData from "@/data/categoryData";

function Category({ lng, ...props }) {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const { t, i18n } = useTranslation(lng);

  return (
    <Box className={classes.category} id="catalog">
      <Box className={classes.categoryWrapper}>
        <Title title={"Каталог"} lng={lng} />
      </Box>

      <ul className={classes.categoryList}>
        {categoryData.map((category, index) => {
          return (
            <li className={classes.categoryItem} key={category.id}>
              <Box className={classes.categoryBox}>
                <h4 className={classes.categoryTitle}>{t(category.title)}</h4>

                <Link href={category.link} className={classes.categoryItemLink}>
                  {t("в каталог")}
                  <Box className={classes.categoryItemIconBox}>
                    <Image
                      src={"/icons/arrow-right-white.svg"}
                      width={18}
                      height={15}
                      alt={"icon"}
                      className={classes.categoryIcon}
                    />
                  </Box>
                </Link>
              </Box>

              <Box className={classes.categoryImgBox}>
                <Image
                  src={category.image}
                  width={378}
                  height={205}
                  alt={"category-image"}
                  className={classes.categoryImg}
                />
              </Box>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default Category;
