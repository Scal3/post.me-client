import './main-page.css';

import React from 'react'
import MainLayout from '../../layouts/main-layout/MainLayout';
import Header from '../../components/header/Header';
import PostsList from '../../components/posts-list/PostsList';
import { PostsList as PostsListInterface } from '../../api/types';

const mockData: PostsListInterface = { 
  posts: [
    { id: 1,  username: "user1", heading: "heading1", text: "Effervescent sunsets paint the sky with hues of warmth, as gentle whispers of wind sway the leaves in a dance of tranquility. Nature's palette weaves a tapestry of serenity, inviting contemplation and embracing the soul in a symphony of moments.", createdAt: new Date(), comments: [] },
    { id: 2,  username: "user2", heading: "heading2", text: "text2", createdAt: new Date(), comments: [] },
    { id: 3,  username: "user3", heading: "heading3", text: "Effervescent sunsets paint the sky with hues of warmth, as gentle whispers of wind sway the leaves in a dance of tranquility. Nature's palette weaves a tapestry of serenity, inviting contemplation and embracing the soul in a symphony of moments.", createdAt: new Date(), comments: [] },
    { id: 4,  username: "user4", heading: "heading4", text: "text4", createdAt: new Date(), comments: [] },
    { id: 5,  username: "user5", heading: "heading5", text: "Effervescent sunsets paint the sky with hues of warmth, as gentle whispers of wind sway the leaves in a dance of tranquility. Nature's palette weaves a tapestry of serenity, inviting contemplation and embracing the soul in a symphony of moments.", createdAt: new Date(), comments: [] },
    { id: 6,  username: "user1", heading: "heading1", text: "Effervescent sunsets paint the sky with hues of warmth, as gentle whispers of wind sway the leaves in a dance of tranquility. Nature's palette weaves a tapestry of serenity, inviting contemplation and embracing the soul in a symphony of moments.", createdAt: new Date(), comments: [] },
    { id: 7,  username: "user2", heading: "heading2", text: "text2", createdAt: new Date(), comments: [] },
    { id: 8,  username: "user3", heading: "heading3", text: "Effervescent sunsets paint the sky with hues of warmth, as gentle whispers of wind sway the leaves in a dance of tranquility. Nature's palette weaves a tapestry of serenity, inviting contemplation and embracing the soul in a symphony of moments.", createdAt: new Date(), comments: [] },
    { id: 9,  username: "user4", heading: "heading4", text: "text4", createdAt: new Date(), comments: [] },
    { id: 10,  username: "user5", heading: "heading5", text: "Effervescent sunsets paint the sky with hues of warmth, as gentle whispers of wind sway the leaves in a dance of tranquility. Nature's palette weaves a tapestry of serenity, inviting contemplation and embracing the soul in a symphony of moments.", createdAt: new Date(), comments: [] },
  ] 
};

// Logic here, this is control component
const MainPage = () => {
  return (
    <MainLayout>
      <div className='main-page'>
        <Header onClick={() => console.log("click")}/>
        <PostsList posts={mockData.posts}/>
      </div>
    </MainLayout>
  )
}

export default MainPage;