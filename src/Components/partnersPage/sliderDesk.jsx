"use client";
import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import classes from "./styles.module.css";
import { register } from "swiper/element";
import { Scrollbar } from "swiper/modules";
import partnersData from "@/data/partnersData";
import PartnersItem from "./partnersItem";
import SliderImageViewer from "./sliderImageViewer";
import ModalContent from "./modalContent";

function SliderDesk({ lng, ...props }) {
  const swiperRef = useRef(null);
  const [images, setImages] = useState(partnersData);

  useEffect(() => {
    register();

    const params = {
      modules: [Scrollbar],
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      scrollbar: { draggable: true },

      injectStyles: [],
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  const [currentImage, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Box className={classes.swiperWrapper}>
        <swiper-container ref={swiperRef} class={classes.mySwiper} init="false">
          {images.map((partners, index) => {
            return (
              <swiper-slide key={partners.id} class={classes.swiperSlide}>
                <PartnersItem
                  partners={partners}
                  lng={lng}
                  openImageViewer={openImageViewer}
                  index={index}
                />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </Box>
      <ModalContent open={isViewerOpen} setOpen={setIsViewerOpen}>
        <SliderImageViewer
          images={images}
          currentImage={currentImage}
          closeImageViewer={closeImageViewer}
        />
      </ModalContent>
    </>
  );
}

export default SliderDesk;
