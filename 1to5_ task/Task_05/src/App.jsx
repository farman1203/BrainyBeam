import { useState } from "react";

function App() {
  const [kg, setKg] = useState("");
  const [lbs, setLbs] = useState("");

  // KG → Pounds
  const handleKgChange = (e) => {
    const value = e.target.value;
    setKg(value);

    if (value === "") {
      setLbs("");
    } else {
      setLbs((value * 2.20462).toFixed(2));
    }
  };

  // Pounds → KG
  const handleLbsChange = (e) => {
    const value = e.target.value;
    setLbs(value);

    if (value === "") {
      setKg("");
    } else {
      setKg((value / 2.20462).toFixed(2));
    }
  };

  return (
    <div className="container">
      <h1>⚖️ Weight Converter</h1>

      <div className="input-group">
        <label>Kilograms (KG)</label>
        <input
          type="number"
          placeholder="Enter KG"
          value={kg}
          onChange={handleKgChange}
        />
      </div>

      <div className="input-group">
        <label>Pounds (Lbs)</label>
        <input
          type="number"
          placeholder="Enter Pounds"
          value={lbs}
          onChange={handleLbsChange}
        />
      </div>
    </div>
  );
}

export default App;