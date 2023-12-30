import React from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import "./FaqSaction.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
function FaqSactin() {
  const questions = [
    "How does an investor gain access to MF Utility?",
    "Will investors be able to have multiple Common Account Numbers?",
    "How does an investor gain access to MF Utility?",
  ];
  const answers = [
    "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  ];
  const [open, setOpen] = React.useState("");
  const toggleOpen = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <div className="faq">
      <Heading
        color={{ base: "#1B4775", md: "#1B4775", lg: "#1B4775", xl: "#1B4775" }}
        as={"h3"}
        textAlign={"center"}
      >
        FAQ
      </Heading>

      {questions.map((question, index) => (
        <>
          <article
            className="question"
            key={index}
            onClick={() => toggleOpen(index)}
          >
            <Heading
              
              color={open==index? "#1B4775":"black"}
              fontSize={{
                base: "1rem",
                md: "1rem",
                lg: "1.2rem",
                xl: "1.5rem",
              }}
            >
              {question}
            </Heading>

            {open === index ? (
              <FaMinusCircle style={{ fontSize: "1.5rem" }} />
            ) : (
              <FaPlusCircle style={{ fontSize: "1.5rem" }} />
            )}
          </article>
          <article className="answer">
            {open === index && (
              <Text
                color={{ base: "black", md: "black", lg: "black", xl: "black" }}
                fontSize={{
                  base: "0.8rem",
                  md: "0.8rem",
                  lg: "1rem",
                  xl: "1.2rem",
                }}
              >
                {answers[index]}
              </Text>
            )}
          </article>
        </>
      ))}
    </div>
  );
}

export default FaqSactin;
