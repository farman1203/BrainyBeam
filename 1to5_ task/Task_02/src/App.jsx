import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Countdown Logic
  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    if (seconds > 0) {
      setTimeLeft(Number(seconds));
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds("");
    setTimeLeft(0);
  };

  return (
    <div className="container">
      <h1>⏲️ Kitchen Timer</h1>

      <input
        type="number"
        placeholder="Enter Seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />

      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>

      <h2>{timeLeft}</h2>

      {timeLeft === 0 && !isRunning && seconds !== "" && (
        <h3>⏰ Time's Up!</h3>
      )}
    </div>
  );
}

export default App;