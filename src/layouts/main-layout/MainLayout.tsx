import "./main-layout.css";

import React, { FC, ReactElement } from 'react'

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      {children}
    </div>
  )
}

export default MainLayout;