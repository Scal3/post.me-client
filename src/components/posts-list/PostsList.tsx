import "./posts-list.css";

import React, { FC } from 'react'
import { OnePost } from '../../api/types';
import Post from '../post/Post';
import { Link } from "react-router-dom";

interface PostsListProps {
  posts: OnePost[]
}

// It gets an array with posts from outside (from MainPage)
// Then it does magic to implement infinite list
// And it does mapping data to Post via cycle
export const PostsList: FC<PostsListProps> = ({ posts }) => {
  
  const postsArray = posts.map(post => (
    <Link key={post.id} to={"/" + post.id} className="posts-list__link">
      <Post
        key={post.id} 
        username={post.username}
        heading={post.heading}
        text={post.text}
        createdAt={post.createdAt}
        comments={post.comments}
        isLong={false}
      />
    </Link>
    
  ));

  return (
    <div className='posts-list'>
      {postsArray}
    </div>
    
  )
}

export default PostsList;