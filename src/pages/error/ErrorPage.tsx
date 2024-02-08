import "./error-page.css";

import React, { FC } from 'react';
import { useRouteError } from "react-router-dom";
import ErrorLayout from "../../layouts/error-layout/ErrorLayout";

const ErrorPage: FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <ErrorLayout>
      <div className="error-page">
        <div className="error-page__content">
          <h1 className="error-page__heading">Oops!</h1>
          <h1 className="error-page__heading">An unexpected error has occurred</h1>

          <p className="error-page__p">{error.status} {error.statusText}</p>
          <p className="error-page__p">{error.data}</p>
        </div>
      </div>
    </ErrorLayout>
  )
}

export default ErrorPage;