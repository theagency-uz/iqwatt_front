"use client";
import { forwardRef, useRef } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";

import classes from "./styles.module.css";
import CloseIcon from "@mui/icons-material/Close";
// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useEffect } from "react";
import { register } from "swiper/element";

function useOutsideAlerter(ref, fn) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      let check = false;

      for (let i = 0; i < ref.length; i++) {
        if (ref[i].current && !ref[i].current.contains(event.target)) {
          check = true;
        } else {
          check = false;
          break;
        }
      }
      if (check) {
        fn(event);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, fn]);
}

const SliderImageViewer = forwardRef(function SliderImageViewer(
  { images, closeImageViewer, currentImage, ...props },
  ref
) {
  const swiperRef = useRef();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useOutsideAlerter([swiperRef], () => {
    closeImageViewer();
  });

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters

    const params = {
      injectStyles: [
        `
        .swiper-button-next svg,
          .swiper-button-prev svg {
            width: 80%;
            height: 80%;
          }
        `,
      ],
      spaceBetween: 1,
      freeMode: true,
      modules: [Navigation],
      navigation: true,
      loop: true,
      initialSlide: currentImage,
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, [currentImage]);

  return (
    <Box className={classes["viewerBox"]} ref={ref} {...props}>
      <Box className={classes["viewerMain"]}>
        <swiper-container
          init="false"
          ref={swiperRef}
          class={classes["viewerSwiper"]}
        >
          {images.map((image, index) => (
            <swiper-slide class={classes["viewerSwiper_item"]} key={image.id}>
              <Image
                src={image.image}
                width={647}
                height={400}
                alt={"partners-image"}
                style={{
                  width: mdUp ? "70%" : "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </Box>
      <Button
        onClick={closeImageViewer}
        sx={{
          position: "absolute",
          top: "26px",
          right: "20px",
          zIndex: "10000",
        }}
      >
        <CloseIcon
          fontSize="medium"
          style={{ color: "#fff", width: "50px", height: "50px" }}
        />
      </Button>
    </Box>
  );
});

export default SliderImageViewer;
