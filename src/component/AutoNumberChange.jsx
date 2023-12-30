import React, { useState, useEffect, useRef } from "react";
import "./AutoNumberChange.css";
import { Heading, Text } from "@chakra-ui/react";
const AutoNumberChange = ({ counts }) => {
  const [currentCounts, setCurrentCounts] = useState(
    counts.map((item) => ({ count: item.start, endValue: item.end }))
  );
  const paragraph = [
    `Lorem ipsum dolor sit amet,
consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat`,
    `Lorem ipsum dolor sit amet,
consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam
erat, sed diam voluptua. At vero eos et`,
    `Lorem ipsum dolor sit amet,
consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam
erat, sed diam voluptua. At vero eos et`,
    `Lorem ipsum dolor sit amet,
consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut`,
  ];
  const divRefs = useRef([]);

  useEffect(() => {
    divRefs.current = Array(counts.length)
      .fill(null)
      .map((_, index) => divRefs.current[index] || React.createRef());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counts.length]);

  useEffect(() => {
    const animationDuration = 2000; // in milliseconds
    const framesPerSecond = 60;

    const intervals = currentCounts.map((item, index) => {
      const totalFrames = (animationDuration / 1000) * framesPerSecond;
      const increment = item.endValue / totalFrames;

      return setInterval(() => {
        setCurrentCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index].count + increment < item.endValue) {
            newCounts[index].count += increment;
          } else {
            newCounts[index].count = item.endValue;
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, 3000 / framesPerSecond);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [currentCounts]);

  return (
    <div className="auto-number-change">
      {counts.map((item, index) => (
        <div key={index} ref={divRefs.current[index]} className="auto-number">
          <Text color={"#12406F"} fontSize={{ base: "0.6rem", md: "0.8rem" , lg: "1rem", xl: "1rem"}}>Lorem ipsum</Text>
          <Heading color={"#12406F"} fontSize={{ base: "2rem", md: "3rem" , lg: "3rem", xl: "3rem"}}>
            {Math.round(currentCounts[index].count)}+
          </Heading>
          <Heading fontSize={{ base: "1.5rem", md: "2rem" , lg: "2rem", xl: "2rem"}} color={"#12406F"}>Lorem ipsum</Heading>
          <Text fontSize={{ base: "0.6rem", md: "0.8rem" , lg: "1rem", xl: "1rem"}}>{paragraph[index]}</Text>
        </div>
      ))}
    </div>
  );
};

export default AutoNumberChange;