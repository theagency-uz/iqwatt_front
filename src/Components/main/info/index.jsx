"use client";
import classes from "./styles.module.css";
import InfoWrapper from "@/Components/common/infoWrapper";

function Info({ lng, ...props }) {
  return (
    <InfoWrapper
      lng={lng}
      title={"IQ WATT -- канадские системы \n для комфорта и безопасности"}
      text={
        "Мы производим нагревательные и охлаждающие системы для домов и участков. В наше время комфорт не должен быть роскошью, поэтому наша миссия - предоставлять качественную продукцию по разумной  цене."
      }
    />
  );
}

export default Info;
