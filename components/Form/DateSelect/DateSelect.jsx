import React from "react";
import styles from './DateSelect.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelect({Title, selectedDate=null, setDate}) {
  return (
    <label className={styles.label}>
      {Title}
      <DatePicker
        dateFormat="dd-MM-yyyy"
        selected={selectedDate}
        onChange={(data) => setDate(data)}
        placeholderText="dd-mm-yyyy"
      />
    </label>
  );
}
