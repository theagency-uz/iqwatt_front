"use client";
import React, { useState } from "react";
import classes from "./styles.module.css";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Title from "@/Components/common/title";
import { useTranslation } from "@/app/i18n/client";
import faqData from "@/data/faqData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq({ lng, isOpen, setIsOpen, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.faq}>
      <Box className={classes.faqInner}>
        <Title title={"Ответы на частые вопросы"} lng={lng} />
        <p className={classes.faqText}>
          {t(
            "Собрали самые популярные вопросы от наших покупателей и подробно ответили на них"
          )}
        </p>
      </Box>

      <Accordion
        // className={classes.faq}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          margin: 0,
          "&:before": {
            display: "none",
          },
          "&.expanded": {
            display: "none",
          },
        }}
        expanded={isOpen}
        onChange={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <AccordionDetails
          sx={{
            borderBottom: "none",
            padding: 0,
          }}
        >
          {faqData?.map((item, index) => {
            return (
              <Accordion
                key={item.id}
                sx={{
                  borderRadius: "10px !important",
                  background: "#F8F8F8",
                  boxShadow: "none",
                  paddingTop: mdUp ? "40px" : "20px",
                  paddingBottom: mdUp ? "50px" : "20px",
                  paddingRight: mdUp ? "25px" : "20px",
                  paddingLeft: mdUp ? "50px" : "20px",
                  marginBottom: "15px",
                  "&::before": {
                    display: "none",
                  },
                }}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  // expandIcon={
                  //   expanded === `panel${index}` ? (
                  //     <CloseIcon
                  //       style={{
                  //         color: "rgba(227, 28, 30, 1)",
                  //         width: "35px",
                  //         height: "35px",
                  //       }}
                  //     />
                  //   ) : (
                  //     <AddIcon
                  //       style={{
                  //         color: "rgba(227, 28, 30, 1)",
                  //         width: "35px",
                  //         height: "35px",
                  //       }}
                  //     />
                  //   )
                  // }
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color: "rgba(255, 129, 20, 1)",
                        width: mdUp ? "45px" : "40px",
                        height: mdUp ? "45px" : "40px",
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    borderRadius: "0",
                    padding: 0,
                    display: "flex",
                    margin: "0",
                    justifyContent: "space-between",
                    fontSize: "20px",
                    minHeight: "auto",
                    "&.Mui-expanded": {
                      minHeight: "auto",
                    },
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      width: mdUp ? "55px" : "40px",
                      height: mdUp ? "55px" : "40px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    "& .MuiAccordionSummary-content.Mui-expanded": {
                      margin: "0",
                    },
                    // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                    //   margin: "0",
                    // },
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: mdUp ? "var(--font18)" : "var(--font16)",
                      lineHeight: "100%",
                      fontFamily: "Manrope",
                      color: "#333",
                      fontStyle: "normal",
                    }}
                  >
                    {item.id}. {t(item.title)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: "0",
                    paddingTop: mdUp ? "40px" : "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "var(--font14)",
                      lineHeight: "128.5%",
                      fontFamily: "Manrope",
                      color: "#8E8E8E",
                      fontStyle: "normal",
                    }}
                  >
                    {t(item.text)}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Faq;
