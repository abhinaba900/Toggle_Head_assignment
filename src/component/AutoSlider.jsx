import React from "react";
import { Button, Image, Heading, Text } from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";
import "./AutoSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function AutoSlider() {
  return (
    <div className="slider">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        width={{ base: "70rem", md: "70rem", lg: "70rem", xl: "70rem" }}
      >
        <SwiperSlide className="slider-Content">
          <div className="slider-text">
            <div className="slider-Content-text">
              <Heading as={"h2"} color={"black"}>
                Lorem ipsum
              </Heading>
              <Text as={"p"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd
              </Text>
              <Button>
                Know More <IoMdArrowDropright />
              </Button>
            </div>
            <Image
               style={{ width: "auto" }}
              src="https://www.theirmindia.org/assets/images/homepage/hbanner_6.png"
              alt="logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-Content">
          <div className="slider-text">
            <div className="slider-Content-text">
              <Heading as={"h2"} color={"black"}>
                Lorem ipsum
              </Heading>
              <Text as={"p"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd
              </Text>
              <Button>
                Know More <IoMdArrowDropright />
              </Button>
            </div>
            <Image
              style={{ width: "auto" }}
              src="https://www.theirmindia.org/assets/images/homepage/hbanner_2.png"
              alt="logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-Content">
          <div className="slider-text">
            <div className="slider-Content-text">
              <Heading as={"h2"} color={"black"}>
                Lorem ipsum
              </Heading>
              <Text as={"p"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd
              </Text>
              <Button>
                Know More <IoMdArrowDropright />
              </Button>
            </div>
            <Image
              style={{ width: "auto" }}
              src="https://www.theirmindia.org/assets/images/homepage/hbanner_3.png"
              alt="logo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider-Content">
          <div className="slider-text">
            <div className="slider-Content-text">
              <Heading as={"h2"} color={"black"}>
                Lorem ipsum
              </Heading>
              <Text as={"p"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd
              </Text>
              <Button>
                Know More <IoMdArrowDropright />
              </Button>
            </div>
            <Image
              style={{ width: "auto" }}
              src="https://www.theirmindia.org/assets/images/homepage/hbanner_14.png"
              alt="logo"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AutoSlider;
