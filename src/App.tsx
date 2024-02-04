import './App.css';

import React from 'react';
import MainLayout from './layouts/MainLayout';


const App = () => {
  return (
    <div className="App">
        <MainLayout>
          {/* put app's pages here */}
          <div>app is here</div>
        </MainLayout>
    </div>
  );
}

export default App;
