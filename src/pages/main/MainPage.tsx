import './main-page.css';

import React from 'react'
import MainLayout from '../../layouts/main-layout/MainLayout';
import Header from '../../components/header/Header';

const MainPage = () => {
  return (
    <MainLayout>
      <div className='main-page'>
        <Header onClick={() => console.log("click")}/>

        main page with posts
      </div>
    </MainLayout>
  )
}

export default MainPage;