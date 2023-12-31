import React from "react";
import "./FooterSection.css";
import { Heading, Text } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaQuora } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { FaTrainSubway } from "react-icons/fa6";
function FooterSection() {
  return (
    <div className="footer-section">
      <div className="footer-text">
        <Heading>Contact us</Heading>
        <Text color={"white"}>
          Address: amet, consetetur sadipscing elitr, sed diam
        </Text>
        <Text color={"white"}>
          Email id: eirmod tempor invidunt ut labore et dolore
        </Text>
        <Text color={"white"}>Phone no: 123456789</Text>
      </div>
      <div className="footer-text">
        <Heading>Follow us</Heading>
        <div className="footer-icons">
          <FaFacebookF color="white" className="icons" />
          <FaLinkedinIn color="white" className="icons" />
          <FaInstagram color="white" className="icons" />
          <TiSocialTwitter color="white" className="icons" />
          <CiYoutube color="white" className="icons" />
          <FaQuora color="white" className="icons" />
        </div>
      </div>
      <div className="footer-text">
        <Heading>Head Office</Heading>
        <div style={{ display: "flex" }} alignItems={"center"}>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <CiLocationOn fontSize={"2.5rem"} color={"white"} />
            Lorem ipsum dolor sit amet, consetetur sadipscing elits, sed diam
            nonumy eirmod tempor invidunt ut.
          </Text>
        </div>
        <div style={{ display: "flex" }}>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <CiStopwatch fontSize={"2rem"} color={"white"} />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </Text>
        </div>
        <div style={{ display: "flex" }}>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <CiStopwatch fontSize={"2rem"} color={"white"} />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </Text>
        </div>
        <div style={{ display: "flex" }}>
          <Text display={"flex"} alignItems={"center"} color={"white"}>
            <FaTrainSubway fontSize={"1.5rem"} color={"white"} />
            Lorem ipsum asd asdsaweeq Lorem Ipsum
          </Text>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
