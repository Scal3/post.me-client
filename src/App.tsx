import './App.css';

import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './pages/main/Main';
import SinglePost from './pages/single-post/SinglePost';

// put app's pages here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/:postId",
    element: <SinglePost/>,
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