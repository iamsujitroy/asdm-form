import React from "react";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({ text }) {
  return (
    <div className={styles.breadcrumb}>
      <div className={styles.breadcrumb__wrapper}>{text}</div>
    </div>
  );
}
