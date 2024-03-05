"use client";
import { Global } from "@emotion/react";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  Clusterer,
} from "@pbe/react-yandex-maps";
import { useTranslation } from "@/app/i18n/client";
import classes from "./styles.module.css";
// import { yandexMapsApiKey } from "src/utils/endpoint";

const markers = [
  {
    position: { lat: 41.263219, lng: 69.328892 },
    title: "Пивоваренный завод Erkmakon",
    label: "Erkmakon",
    address: "г. Ташкент, Муйнак, 96",
    number: "+998 90 097 73 90",
  },
];

export default function YandexMap({ type, lng, ...props }) {
  const { t, i18n } = useTranslation(lng);
  const [error, setError] = useState();
  const [branch, setBranch] = useState();
  const [center, setCenter] = useState([41.263219, 69.328892]);
  const [zoom, setZoom] = useState(18);
  const mapRef = useRef(null);

  useEffect(() => {
    if (branch || branch === 0) {
      let tempCenter = [
        markers[branch].position.lat,
        markers[branch].position.lng,
      ];
      setZoom(18);
      setCenter(tempCenter);
    }
  }, [branch]);

  return (
    <YMaps
      key={i18n.language}
      query={{
        lang:
          i18n.language === "ru"
            ? "ru_RU"
            : i18n.language === "uz"
            ? "uz_UZ"
            : "en_RU",
        apikey: markers,
      }}
    >
      <Global
        styles={{
          ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {},
        }}
      />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            padding: "0 8px",
            position: "absolute",
            width: "100%",
            top: "10px",
            left: "0",
            zIndex: 1,
            display: "flex",
          }}
        ></Box>
        <Map
          instanceRef={mapRef}
          defaultState={{ center: center, zoom: zoom, controls: [] }}
          state={{ center: center, zoom: zoom, controls: [] }}
          style={{
            width: "100%",
            height: type === "desktop" ? "460px" : "500px",
            maxHeight: "70vh",
          }}
          className={classes.map}
          onError={(e) => {
            setError(e);
          }}
          options={{
            suppressMapOpenBlock: true,
            mapAutoFocus: false,
          }}
        >
          <ZoomControl options={{ float: "right" }} />
          <Clusterer
            options={{
              groupByCoordinates: false,
            }}
          >
            {markers.map((marker, index) => {
              return (
                <Placemark
                  modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                  key={marker.address}
                  geometry={[marker.position.lat, marker.position.lng]}
                  options={{
                    // balloonContentLayout: <button>{marker.address}</button>,
                    // preset: "islands#icon",
                    iconColor: "blue",
                  }}
                  properties={{
                    hasHint: true,
                    // balloonContent: `<p class=${
                    //   classes.mapText
                    // }>${t(marker.title)}</p>
                    // <div class=${
                    //   classes.mapBox
                    // }>
                    // <p>${t("Адрес")}:</p>
                    // <p>${t(marker.address)}</p>
                    // </div> <div class=${classes.mapBox}>
                    // <p>${t("Телефон")}:</p>
                    // <p>${t(marker.number)}</p>
                    // </div>`,
                    hintContent: `${t(marker.address)}`,
                  }}
                />
              );
            })}
          </Clusterer>
        </Map>
      </Box>
    </YMaps>
  );
}
