import './main-page.css';

import React, { useEffect } from 'react'
import MainLayout from '../../layouts/main-layout/MainLayout';
import Header from '../../components/header/Header';
import PostsList from '../../components/posts-list/PostsList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

// Logic here, this is control component
const MainPage = () => {
  const { fetchPosts } = useActions();
  const { posts, page, limit } = useTypedSelector(state => state.post);
  // I must add some spinner for loading
  // And loading/setLoading in store

  // Fetch initial set of posts
  useEffect(() => {
    fetchPosts(page, limit);
  }, []);


  return (
    <MainLayout>
      <div className='main-page'>
        <Header onClick={console.log}/>
        <PostsList posts={posts}/>
      </div>
    </MainLayout>
  )
}

export default MainPage;