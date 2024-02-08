import "./posts-list.css";

import React, { FC } from 'react'
import { OnePost } from '../../api/types';
import Post from '../post/Post';
import { Link } from "react-router-dom";
import TimeParser from "../../utils/TimeParser";

interface PostsListProps {
  posts: OnePost[]
}

export const PostsList: FC<PostsListProps> = ({ posts }) => {
  
  const postsArray = posts.map(post => (
    <Link key={post.id} to={"/" + post.id} className="posts-list__link">
      <Post
        key={post.id} 
        username={post.username}
        heading={post.heading}
        text={post.text}
        createdAt={TimeParser.toAppropriate(post.createdAt)}
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