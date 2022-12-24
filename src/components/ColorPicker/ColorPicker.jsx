import classNames from 'classnames';
import styles from 'components/ColorPicker/ColorPicker.module.css';
import React, { useState, memo } from 'react';

export default memo(function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptiontIdx] = useState(0);

  const setActiveIdx = index => {
    setActiveOptiontIdx(index);
  };

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptionIdx,
    });
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{
              backgroundColor: color,
              width: 50,
              height: 50,
            }}
            onClick={() => setActiveIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
});
