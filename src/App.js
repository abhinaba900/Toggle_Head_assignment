import logo from "./logo.svg";
import "./App.css";
import Component from "./component/Navbar";
import { LuSearch } from "react-icons/lu";
import { Button } from "@chakra-ui/react";
import AutoSlider from "./component/AutoSlider";
import UpcomingSection from "./component/UpcomingSection";
import HorizontalScroling from "./component/HorizontalScroling";
import AutoNumberChange from "./component/AutoNumberChange";
import FaqSactin from "./component/FaqSactin";
import FooterSection from "./component/FooterSection";
import SubscripeSection from "./component/SubscripeSection";
import { useEffect, useState } from "react";
import MobileMenuButton from "../src/component/MobileMenuButton.jsx";
function App() {
  const counts = [
    { start: 0, end: 123 },
    { start: 0, end: 12 },
    { start: 0, end: 12 },
    { start: 0, end: 123 },
    // Add more objects with start and end values as needed
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    let mobile = window.matchMedia("(max-width: 768px)");
    if (mobile.matches) {
      setIsMobile(true);
    }
    mobile.addEventListener("change", (e) => {
      if (e.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
    return () => {
      mobile.removeEventListener("change", (e) => {
        if (e.matches) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="background"></div>
        <div className="header-container-parent">
          {isMobile && <MobileMenuButton />}
          <h2>LOGO</h2>
          <div className="header-container">
            <Component />
            <LuSearch style={{ color: "white" }} />
            <Button>Enrolment</Button>
          </div>
        </div>
      </header>
      <body>
        <AutoSlider />
        <UpcomingSection />
        <HorizontalScroling />
        <AutoNumberChange counts={counts} />
      </body>
      <FaqSactin />
      <SubscripeSection />
      <FooterSection />
      <footer
        style={{
          textAlign: "center",
          backgroundColor: "#002F5F",
          color: "white",
        }}
      >
        <p>© 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
// this is extra comment for test commits