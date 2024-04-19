import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Divider from "./images/pattern-divider-desktop.svg";
import DividerMobile from "./images/pattern-divider-mobile.svg";
import IconDice from "./images/icon-dice.svg";

function App() {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");

  const fetchdata = async () => {
    const response = await axios.get(url);
    const respData = response.data.slip;
    setAdvice(respData);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="card">
      <h4>Advice #{advice.id}</h4>
      <h3>{advice.advice}</h3>
      <img src={Divider} className= "dividerdestop" alt="divider" />
      <img src={DividerMobile} className= "dividermobile" alt="divider mobile" />
      <div className="dice" onClick={fetchdata}>
        <img src={IconDice} alt="icon-dice" />
      </div>
    </div>
  );
}

export default App;
