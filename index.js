import { useEffect, useState } from 'react';

export const MILLISECONDS_IN_HOUR = 60 * 60 * 1000;

const useTimer = ({
  startTime,
  label,
  format = {},
}) => {
  const [elapsed, setElapsed] = useState(calculateElapsedTime());

  const tick = () => {
    setElapsed(calculateElapsedTime());
  };

  function calculateElapsedTime() {
    return Date.now() - startTime;
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const options = {
    timeZone: 'UTC',
    hour12: false,
    hour: elapsed >= MILLISECONDS_IN_HOUR ? '2-digit' : undefined,
    minute: '2-digit',
    second: '2-digit',
    ...format,
  };

  const elapsedTimeString = new Date(elapsed).toLocaleTimeString([], options);

  return {
    elapsedTime: elapsedTimeString,
    label,
  };
};

module.exports = useTimer;