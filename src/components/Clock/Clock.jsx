import React, { useState, useEffect, useRef } from 'react';

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

// Первый рендер
// Каждый рендер
// Каждый рендер при изменении какого-то стейта или пропса
// Последний рендер

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // function to clear useEffect
    return () => {
      // clearInterval(intervalId.current);
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };
  return (
    <>
      <p style={styles.clockface}>Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </>
  );
}
