import React from "react";
import styles from './InputNumber.module.css';

export default function InputText({Title, value, setValue}) {
  return (
    <label className={styles.label} style={{display: 'flex'}}>
      {Title}
      <input className={styles.input} type="number" min={0} value={value} onChange={(event)=>setValue(event.target.value)}/>
    </label>
  );
}
