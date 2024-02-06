import './main-page.css';

import React from 'react'
import MainLayout from '../../layouts/main-layout/MainLayout';
import Header from '../../components/header/Header';
import PostsList from '../../components/posts-list/PostsList';
import { PostsList as PostsListInterface } from '../../api/types';
import api from '../../api/Api';

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
  const makeAllPostsRequest = async () => {
    try {
      const posts = await api.getPosts(0, 20);
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  }

  // const makeOnePostRequest = async () => {
  //   try {
  //     const posts = await api.getOnePostById(5);
  //     console.log(posts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const createPostRequest = async () => {
  //   try {
  //     const post = {
  //       username: "Herman",
  //       heading: "Test post from client",
  //       text: "Ya lomaaaal steklo!"
  //     }

  //     const posts = await api.createPost(post);
  //     console.log(posts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const createCommentRequest = async () => {
  //   try {
  //     const comment = {
  //       username: "Herman",
  //       text: "Сам откомментил",
  //       postId: 16
  //     }

  //     const posts = await api.createComment(comment);
  //     console.log(posts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  return (
    <MainLayout>
      <div className='main-page'>
        <Header onClick={makeAllPostsRequest}/>
        <PostsList posts={mockData.posts}/>
      </div>
    </MainLayout>
  )
}

export default MainPage;