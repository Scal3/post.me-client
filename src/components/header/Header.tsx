import "./header.css";

import React, { FC } from 'react'

interface HeaderProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Header: FC<HeaderProps> = ({ onClick }) => {
  return (
    <div className="header">
      <img className="header__logo" src={require('./logo.png')} alt="logo" />
      <button className="header__button" onClick={onClick}/>
    </div>
  )
}

export default Header;