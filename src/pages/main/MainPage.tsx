import './main-page.css';

import React, { useEffect } from 'react'
import MainLayout from '../../layouts/main-layout/MainLayout';
import Header from '../../components/header/Header';
import PostsList from '../../components/posts-list/PostsList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Spinner from '../../components/spinner/Spinner';
import { debounce } from 'lodash';

const MainPage = () => {
  const { fetchPosts } = useActions();
  const { posts, page, limit, isLoading } = useTypedSelector(state => state.post);

  // Fetch initial set of posts
  useEffect(() => {
    fetchPosts(page, limit);
  }, []);

  const handleScroll = () => {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.scrollY;

    // Check if the user has scrolled to the bottom of the page
    if (windowBottom >= docHeight - 100) {
      // Fetch more posts when reaching the bottom
      fetchPosts(page, limit);
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 300);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [page, debouncedHandleScroll]);

  return (
    <MainLayout>
      <>
        {isLoading && <Spinner/>}

        <div className='main-page'>
          <Header onClick={console.log}/>
          <PostsList posts={posts}/>
        </div>
      </>
    </MainLayout>
  )
}

export default MainPage;