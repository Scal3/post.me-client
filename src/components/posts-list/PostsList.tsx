import "./posts-list.css";

import React, { FC } from 'react'
import { PostsList as PostsListInterface } from '../../api/types';
import Post from '../post/Post';

interface PostsListProps extends PostsListInterface {
}

// It gets an array with posts from outside (from MainPage)
// Then it does magic to implement infinite list
// And it does mapping data to Post via cycle
export const PostsList: FC<PostsListProps> = ({ posts }) => {
  
  const postsArray = posts.map(post => (
    <Post
      key={post.id} 
      username={post.username}
      heading={post.heading}
      text={post.text}
      createdAt={post.createdAt}
      comments={post.comments}
      isLong={false}
    />
  ));

  return (
    <div className='posts-list'>
      {postsArray}
    </div>
    
  )
}

export default PostsList;