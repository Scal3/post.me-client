import "./header.css";

import React, { FC } from 'react'

interface HeaderProps {
  onButtonClick: (e: React.MouseEvent<HTMLElement>) => void;

  onLogoClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Header: FC<HeaderProps> = ({ onLogoClick, onButtonClick }) => {
  return (
    <div className="header">
        <img 
          className="header__logo" 
          src={require('./logo.png')} 
          alt="logo" 
          onClick={onLogoClick}
        />
      <button className="header__button" onClick={onButtonClick}/>
    </div>
  )
}

export default Header;