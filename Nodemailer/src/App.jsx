import { useState } from "react";
import axios from "axios";

function App() {

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const sendOTP = async () => {

    const res = await axios.post(
      "http://localhost:5000/send-otp",
      { email }
    );

    alert(res.data.message);

  };

  const verifyOTP = async () => {

    const res = await axios.post(
      "http://localhost:5000/verify-otp",
      { otp }
    );

    alert(res.data.message);

  };

  return (

    <div style={{ padding: 30 }}>

      <h2>Email OTP Verification</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={sendOTP}>
        Send OTP
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <br /><br />

      <button onClick={verifyOTP}>
        Verify OTP
      </button>

    </div>

  );

}

export default App;