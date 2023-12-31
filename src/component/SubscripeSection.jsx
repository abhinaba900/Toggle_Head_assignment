import { Heading, Text, Button, Input } from "@chakra-ui/react";
import React from "react";
import "./SubscripeSection.css";
import { IoMdArrowDropright } from "react-icons/io";

function SubscripeSection() {
  return (
    <div className="subscripe-section-container">
      <div className="subscripe-section-text-container">
        <Heading
          fontSize={{
            base: "1.5rem",
            md: "1.5rem",
            lg: "1.5rem",
            xl: "2.5rem",
          }}
          color={"#12406F"}
        >
          Subscribe
        </Heading>
        <Text
          color={"black"}
          fontSize={{ base: "1rem", md: "1rem", lg: "1rem", xl: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </Text>
        <div className="subscripe-section-input-container">
          <Input
            w={{ base: "100%", md: "60%", lg: "60%", xl: "60%" }}
            placeholder="Enter your Email Address"
            type="email"
          />
          <Button background={"#12406F"} color={"white"}>
            Subscribe Now
            <IoMdArrowDropright />
          </Button>
        </div>
      </div>
      <div>
        <img
          src="https://www.theirmindia.org/assets/images/irm_home/section7_container2_img.svg"
          alt="subscripe"
        />
      </div>
    </div>
  );
}

export default SubscripeSection;
