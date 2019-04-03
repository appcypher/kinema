import React from 'react';
import './index.scss';
// Images
import hamburgerMenu from '../../assets/icons/hamburger-menu.svg';
import scale from '../../assets/icons/scale.svg';
import translate from '../../assets/icons/translate.svg';
import rotate from '../../assets/icons/rotate.svg';
import shear from '../../assets/icons/shear.svg';
import dropdownArrow from '../../assets/icons/dropdown-arrow.svg';

const MenuBar = () => (
  <div className="menu-bar">
    <div className="menu-bar__hambuger-menu">
      <img src={hamburgerMenu} alt="hamburgerMenu" />
    </div>
    <div className="menu-bar__button-menu">
      <img src={scale} alt="scale" />
      <img src={translate} alt="translate" />
      <img src={rotate} alt="rotate" />
      <img src={shear} alt="shear" />
    </div>
    <div className="menu-bar__left">
      <div className="menu-bar__left__project-dropdown">
        New Project
        <img src={dropdownArrow} alt="dropdownArrow" className="animated slide-down" />
      </div>
    </div>
  </div>
);

export default MenuBar;
