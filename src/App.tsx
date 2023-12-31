import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Demarcation from "./components/Demarcation";
import HowToJoin from "./components/HowToJoin";
import OurVisionTeam from "./components/OurVisionTeam";
import HeaderAboutUs from "./components/HeaderAboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-hidden hs-[57.7vw]">
        <HeaderAboutUs />
      </div>
      <div>
        <Demarcation />
      </div>
      <div className="overflow-hidden">
        <AboutUs />
      </div>
      <div>
        <Demarcation />
      </div>
      <div>
        <OurVisionTeam />
      </div>
      <div>
        <Demarcation />
      </div>
      <div>
        <HowToJoin />
      </div>
      <div>
        <Demarcation />
      </div>
    </>
  );
}

export default App;
