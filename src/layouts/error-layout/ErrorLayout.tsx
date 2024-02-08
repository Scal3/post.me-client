import "./error-layout.css";

import React, { FC, ReactElement } from 'react'

interface ErrorLayoutProps {
  children: ReactElement;
}

const ErrorLayout: FC<ErrorLayoutProps> = ({ children }) => {
  return (
    <div className="error-layout">
      {children}
    </div>
  )
}

export default ErrorLayout;