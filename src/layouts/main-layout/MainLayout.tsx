import "./main-layout.css";

import React, { FC, ReactElement } from 'react'

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-layout__content">
        {children}
      </div>
    </div>
  )
}

export default MainLayout;