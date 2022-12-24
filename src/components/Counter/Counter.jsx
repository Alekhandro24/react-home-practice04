import React, { useState, useEffect } from 'react';

const styles = {
  btn: {
    display: 'inline-flex',
    fontSize: 20,
    margin: 4,
    cursor: 'pointer',
  },
};

// Первый рендер
// Каждый рендер
// Каждый рендер при изменении какого-то стейта или пропса
// Последний рендер

export default function Counter() {
  const [counterA, setCounterA] = useState(0);

  const handleCounterAIncrement = () => {
    // this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const [counterB, setCounterB] = useState(0);

  const handleCounterBIncrement = () => {
    //   this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  useEffect(() => {
    // const totalClicks = counterA + counterB;
    // document.title = `Кликнули ${totalClicks} раз`;

    document.title = `Кликнули ${counterA + counterB} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}
