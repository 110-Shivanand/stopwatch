import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Tracks the timer value in seconds
  const [isActive, setIsActive] = useState(false); // Determines if the timer is active
  const [isPaused, setIsPaused] = useState(true); // Determines if the timer is paused

  // useEffect hook to handle the timer functionality
  useEffect(() => {
    let interval = null;

    // If timer is active and not paused, update the time every 1000ms
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    // Clean up the interval when the component unmounts or the effect reruns
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  // Start the timer
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  // Pause the timer
  const handlePause = () => {
    setIsPaused(true);
  };

  // Reset the timer
  const handleReset = () => {
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  };

  return (
    <div className="timer">
      <h1>Timer</h1>
      <div className="time">{time}s</div>
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
