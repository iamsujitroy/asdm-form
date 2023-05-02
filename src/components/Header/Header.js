import React from "react";
import './Header.css';
import Logo from './Logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt='' />
      </div>
      <div className="header__info">
        <div className="header__info__title">
          ASSAM SKILL DEVELOPEMENT MISSION
        </div>
        <div className="header__info__subtitle">Goverment of Assam</div>
      </div>
    </header>
  );
}
