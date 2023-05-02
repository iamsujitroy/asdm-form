import React from "react";
import styles from './InputText.module.css';

export default function InputText({Title, value, setValue}) {

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <label className={styles.label}>
      {Title}
      <input className={styles.input} type="text" value={value} onChange={handleChange}/>
    </label>
  );
}
