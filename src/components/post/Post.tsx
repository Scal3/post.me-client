import "./post.css";

import { Comment } from "../../api/types";
import React, { FC } from 'react'
import CommentsList from "../comments-list/CommentsList";

interface PostProps {
  username: string;
  heading: string;
  text: string;
  createdAt: Date;
  comments: Comment[];
  isLong: boolean;
}

const Post: FC<PostProps> = ({ 
  username, heading, text, createdAt, comments, isLong
}) => {

  const commentsSection = isLong
                            ? (
                                <div className="post__comments-section">
                                <CommentsList comments={comments}/>
                                </div>
                              ) 
                            : (null);

  return (
    <div className="post">
      <div className={`post__content ${isLong && "post__content_margin_zero border"}`}>
        <div className="post__heading-box">
          <h3 className="post__heading">{heading}</h3>
        </div>

        <div className="post__text-box">
          <p className="post__text">{text}</p>
        </div>

        <div className="post__under-box">
          <div className="post__user-data-box">
            <p className="post__username">
              {username} 
              <span className="post__separator"> | </span> 
              {createdAt.toString()}
            </p>
          </div>
        
          <div className="post__comment-box">
            <p className="post__comments-quantity">Comments: {comments.length}</p>
          </div>
        </div>
      </div>
      
      { commentsSection }
    
    </div>
  )
}

export default Post;