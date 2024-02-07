import './comment.css';

import React, { FC } from 'react'

interface CommentProps {
  username: string;
  text: string;
  createdAt: Date;
}

const Comment: FC<CommentProps> = ({ username, text, createdAt }) => {
  return (
    <div className='comment'>
      <div className='comment__meta-box'>
        <p className='comment__meta'>
          {username} 
          <span className="comment__separator"> | </span>  
          {createdAt.toString()}
        </p>
      </div>

      <div className='comment__text-box'>
        <p className='comment__text'>{text}</p>
      </div>
    </div>
  )
}

export default Comment;
