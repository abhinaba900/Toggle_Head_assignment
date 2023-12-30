import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { TbCalendarTime } from "react-icons/tb";
import "./UpcomingSection.css";
function UpcomingSection() {
  return (
    <div className="upcoming-section">
      <div className="upcoming-text-heading">
        <Heading style={{ fontSize: "1.5rem", color: "#184573" }} as={"h5"}>
          Upcoming Examinations
        </Heading>
        <Text>Enquire about the examination & register for the exams</Text>
      </div>
      <div className="upcoming-text">
        <div>
          <TbCalendarTime style={{ fontSize: "1.9rem ", color: "#184573" }} />
        </div>
        <div>
          <Heading style={{ fontSize: "1.5rem", color: "#184573" }} as={"h5"}>
            02th October 2014
          </Heading>
          <Text>Level 1 exam</Text>
        </div>
      </div>
      <div className="upcoming-text">
        <div>
          <TbCalendarTime style={{ fontSize: "1.9rem ", color: "#184573" }} />
        </div>
        <div>
          <Heading style={{ fontSize: "1.5rem", color: "#184573" }} as={"h5"}>
            Nov-Dec 2016
          </Heading>
          <Text>Level 2</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
        </div>
      </div>
      <div className="upcoming-text">
        <div>
          <TbCalendarTime style={{ fontSize: "1.9rem ", color: "#184573" }} />
        </div>
        <div>
          <Heading
            fontSize={{
              base: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            }}
            as={"h5"}
            style={{ color: "#184573" }}
          >
            Ongoing this year
          </Heading>
          <Text>Level 3 (Grad)</Text>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSection;
