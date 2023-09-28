import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutUs from "./components/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <AboutUs />
      </div>
    </>
  );
}

export default App;
