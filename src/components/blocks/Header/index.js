import React from 'react';
import logo from '../../../assets/images/logo_udk.png';

export default () => {
  return(
    <header className="header">
      <div className="header__top">
        <div className="header__wrapper">
          <ul>
            <li>
              <div className="icon-telephone-regular"></div>
              <p>(061) 764-23-37</p>
            </li>
            <li>
              <div className="icon-telephone-regular"></div>
              <p>(050) 454-93-80</p>
            </li>
            <li>
              <div className="icon-telephone-regular"></div>
              <p>(097) 360-33-74</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__wrapper">
        <div className="header__leftCol">
          <img src={logo} className="header__logo" alt="RiverStroy"/>
        </div>
        <nav className="header__nav">
          <a href="#">Почему мы?</a>
          <a href="#gazbetonUDK">Продукция</a>
          <a href="#">Информация</a>
          <a href="#">Контакты</a>
        </nav>
      </div>
    </header>
  )
}