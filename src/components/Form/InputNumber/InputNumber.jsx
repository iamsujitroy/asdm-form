import React from "react";
import styles from './InputNumber.module.css';

export default function InputNumber({Title, value, setValue}) {

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <label className={styles.label} style={{display: 'flex'}}>
      {Title}
      <input className={styles.input} type="number" min={0} value={value} onChange={handleChange}/>
    </label>
  );
}
