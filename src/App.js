import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [tomeg, setTomeg] = useState(0);
  const [magassag, setMagassag] = useState(0);
  const [alkat, setAlkat] = useState("");
  const tti = tomeg / ((magassag / 100) * (magassag / 100));

  function sulyBe(event) {
    setTomeg(event.target.value);
  }
  function magassagBe(event) {
    setMagassag(event.target.value);

    if (tti < 18.5) {
      setAlkat("Sovány");
    } else if (18.5 <= tti <= 25) {
      setAlkat("Normál");
    } else if (tti > 25) {
      setAlkat("Túlsúlyos");
    }
  }

  return (
    <div>
      <h4>Testtömeg (kg)</h4>
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={sulyBe} />
      </div>

      <h4>Testmagasság (cm)</h4>
      <div className="input-group mb-3">
        <input type="text" className="form-control" onChange={magassagBe} />
      </div>

      <h1 className="d-flex justify-content-center"> {tti.toFixed(1)} </h1>
      <h2 className="d-flex justify-content-center">{alkat}</h2>
    </div>
  );
}
