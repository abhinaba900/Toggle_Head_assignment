import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./HorizontalScroling.css";
import { Heading, Text, Button } from "@chakra-ui/react";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { IoMdArrowDropright } from "react-icons/io";

function HorizontalScroling() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        style={{
          width: "100%",
          height: "22rem",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
          <SwiperSlide>
            <div
              style={{
                backgroundColor: "#13416F",
                width: "auto",
                height: "15rem",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                borderRadius: "2rem",
                backgroundImage:
                  "url(https://www.theirmindia.org/assets/images/irm_home/section2_banner.svg)",
              }}
              key={item}
              className="swiper-slide"
            >
              <Heading
                fontSize={{ base: "1rem", md: "2rem", lg: "2rem", xl: "2rem" }}
              >
                Lorem ipsum
              </Heading>
              <Text
                style={{ color: "white" }}
                fontSize={{
                  base: "0.7rem",
                  md: "1rem",
                  lg: "1.5rem",
                  xl: "1.5rem",
                }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </Text>
              <Button
                style={{
                  background: "transparent",
                  color: "white",
                  width: "8rem",
                }}
              >
                Know More
                <IoMdArrowDropright color="white" />
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HorizontalScroling;
