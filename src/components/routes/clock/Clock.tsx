import { useEffect, useState } from "react";


const Clock = () => {

   // Initialize state with the current date and time
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update state every 1000ms (1 second)
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount to prevent memory leaks
    return () => clearInterval(timerId);
  }, []);

  // Format hours, minutes, and seconds to always show two digits
  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Add leading zeros if numbers are less than 10
    const pad = (num) => String(num).padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  };

  return (
    <div className="clock-container">
      <div className="clock-display">
        {formatTime()}
      </div>
    </div>
  );
}

export default Clock;