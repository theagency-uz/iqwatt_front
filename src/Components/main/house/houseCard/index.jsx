"use client";
import Link from "next/link";
import Image from "next/image";
import { Box, useMediaQuery } from "@mui/material";

import { useTranslation } from "@/app/i18n/client";

import classes from "./styles.module.css";

function HouseCard({ lng, ...props }) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const { t, i18n } = useTranslation(lng);

  return (
    <>
      {lgUp ? (
        <Box className={classes.houseBox}>
          <Image
            src={"/static/site/house.png"}
            width={1045}
            height={644}
            alt={"house-image"}
            className={classes.houseImg}
          />

          <Box className={classes.boxWrapper}>
            <div className={classes.box}>
              <div className={classes.boxLine}>
                <div className={classes.boxLineThird}>
                  <div className={classes.boxCircle}></div>
                </div>
              </div>
            </div>

            <Box className={`${classes.card} ${classes.cardFrst}`}>
              <Box className={classes.cardImgBox}>
                <Image
                  src={"/images/cardImages/roof.png"}
                  width={197}
                  height={116}
                  alt={"house-image"}
                  className={classes.cardImg}
                />
              </Box>
              <Box className={classes.cardWrapper}>
                <h3 className={classes.cardTitle}>{t("IQ Roof")}</h3>
                <p className={classes.cardText}>
                  {t(
                    "Система антиобледенения для крыш работает автоматически, не позволяя образоваться наледи или большому количеству снега для безопасности зимой."
                  )}
                </p>
              </Box>
            </Box>
          </Box>

          <Box className={classes.boxWrapperScnd}>
            <div className={classes.box}>
              <div className={classes.boxLine}>
                <div className={classes.boxLineThird}>
                  <div className={classes.boxCircle}></div>
                </div>
              </div>
            </div>

            <Box className={`${classes.card} ${classes.cardScnd}`}>
              <Box className={classes.cardImgBox}>
                <Image
                  src={"/images/cardImages/outdoor.png"}
                  width={197}
                  height={116}
                  alt={"house-image"}
                  className={classes.cardImg}
                />
              </Box>
              <Box className={classes.cardWrapper}>
                <h3 className={classes.cardTitle}>{t("IQ outdoor")}</h3>
                <p className={classes.cardText}>
                  {t(
                    "Системы снеготаяния для лестниц и участка для безопасности и комфорта на площадке  в зимнее время года."
                  )}
                </p>
              </Box>
            </Box>
          </Box>

          <Box className={classes.boxWrapperThrd}>
            <div className={classes.box}>
              <div className={classes.boxLine}>
                <div className={classes.boxLineThird}>
                  <div className={classes.boxCircle}></div>
                </div>
              </div>
            </div>

            <Box className={`${classes.card} ${classes.cardThrd}`}>
              <Box className={classes.cardImgBox}>
                <Image
                  src={"/images/cardImages/pipe.png"}
                  width={197}
                  height={116}
                  alt={"house-image"}
                  className={classes.cardImg}
                />
              </Box>
              <Box className={classes.cardWrapper}>
                <h3 className={classes.cardTitle}>{t("IQ pipe")}</h3>
                <p className={classes.cardText}>
                  {t(
                    "Системы обогрева труб для защиты от наледи для бесперебойной подачи воды зимой."
                  )}
                </p>
              </Box>
            </Box>
          </Box>

          <Box className={classes.boxWrapperFourth}>
            <div className={classes.box}>
              <div className={classes.boxLine}>
                <div className={classes.boxLineThird}>
                  <div className={classes.boxCircle}></div>
                </div>
              </div>
            </div>

            <Box className={`${classes.card} ${classes.cardFourth}`}>
              <Box className={classes.cardImgBox}>
                <Image
                  src={"/images/cardImages/mat.png"}
                  width={197}
                  height={116}
                  alt={"house-image"}
                  className={classes.cardImg}
                />
              </Box>
              <Box className={classes.cardWrapper}>
                <h3 className={classes.cardTitle}>{t("IQ floor mat")}</h3>
                <p className={classes.cardText}>
                  {t(
                    "​Система «теплого пола» при ремонте существующего пола для любого керамического покрытия. Экономит время при укладке."
                  )}
                </p>
              </Box>
            </Box>
          </Box>

          <Box className={classes.boxWrapperFifth}>
            <div className={classes.box}>
              <div className={classes.boxLine}>
                <div className={classes.boxLineThird}>
                  <div className={classes.boxCircle}></div>
                </div>
              </div>
            </div>

            <Box className={`${classes.card} ${classes.cardFifth}`}>
              <Box className={classes.cardImgBox}>
                <Image
                  src={"/images/cardImages/conditioner.png"}
                  width={197}
                  height={116}
                  alt={"house-image"}
                  className={classes.cardImg}
                />
              </Box>
              <Box className={classes.cardWrapper}>
                <h3 className={classes.cardTitle}>{t("IQ conditioner")}</h3>
                <p className={classes.cardText}>
                  {t(
                    "Кондиционеры для поддержания комфортной температуры в любое время года с системой Wi-Fi или без неё на выбор."
                  )}
                </p>
              </Box>
            </Box>
          </Box>

          <Box className={classes.boxWrapperSixth}>
            <div className={classes.box}>
              <div className={classes.boxLine}>
                <div className={classes.boxLineThird}>
                  <div className={classes.boxCircle}></div>
                </div>
              </div>
            </div>

            <Box className={`${classes.card} ${classes.cardSixth}`}>
              <Box className={classes.cardImgBox}>
                <Image
                  src={"/images/cardImages/thermostat.png"}
                  width={197}
                  height={116}
                  alt={"house-image"}
                  className={classes.cardImg}
                />
              </Box>
              <Box className={classes.cardWrapper}>
                <h3 className={classes.cardTitle}>{t("IQ thermostat")}</h3>
                <p className={classes.cardText}>
                  {t(
                    "Термостаты с ручным или программным управлением в разном стиле и цветах для регулирования работы систем."
                  )}
                </p>
              </Box>
            </Box>
          </Box>

          <Box className={classes.boxWrapperSeventh}>
            <div className={classes.box}>
              <div className={classes.boxLine}>
                <div className={classes.boxLineThird}>
                  <div className={classes.boxCircle}></div>
                </div>
              </div>
            </div>

            <Box className={`${classes.card} ${classes.cardSeventh}`}>
              <Box className={classes.cardImgBox}>
                <Image
                  src={"/images/cardImages/floor.png"}
                  width={197}
                  height={116}
                  alt={"house-image"}
                  className={classes.cardImg}
                />
              </Box>
              <Box className={classes.cardWrapper}>
                <h3 className={classes.cardTitle}>{t("IQ floor")}</h3>
                <p className={classes.cardText}>
                  {t(
                    "​Эта система «теплого пола» предназначена для любого напольного покрытия для комфортного подогрева не только пола, но и помещения."
                  )}
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={classes.houseBoxMobi}>
          <Image
            src={"/static/site/house-mobi.png"}
            width={1120}
            height={690}
            alt={"house-image"}
            className={classes.houseImgMobi}
          />
        </Box>
      )}
    </>
  );
}

export default HouseCard;
