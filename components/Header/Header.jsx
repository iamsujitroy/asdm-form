import React from "react";
import styles from './Header.module.css';
import Image from "next/image";
import Logo from "@/assets/svg/Logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image src={Logo} />
      </div>
      <div className={styles.header__info}>
        <div className={styles.header__info__title}>
          ASSAM SKILL DEVELOPEMENT MISSION
        </div>
        <div className={styles.header__info__subtitle}>Goverment of Assam</div>
      </div>
    </header>
  );
}
