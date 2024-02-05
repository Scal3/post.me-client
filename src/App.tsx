import './App.css';

import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import MainPage from './pages/main/MainPage';
import SinglePostPage from './pages/single-post/SinglePostPage';
import ErrorPage from './pages/error/ErrorPage';

// put app's pages here
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/:postId",
    element: <SinglePostPage/>,
    errorElement: <ErrorPage/>
  },
]);

const App = () => {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;