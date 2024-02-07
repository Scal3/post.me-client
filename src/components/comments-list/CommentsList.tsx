import './comments-list.css';

import React, { FC } from 'react'
import { Comment as CommentInterface } from '../../api/types';
import Comment from '../comment/Comment';

interface CommentsListProps {
  comments: CommentInterface[];
}

const CommentsList: FC<CommentsListProps> = ({ comments }) => {

  const commentsArray = comments.map(comment => (
    <Comment
      key={comment.id} 
      username={comment.username}
      text={comment.text}
      createdAt={comment.createdAt}
    />
  ));

  const commentsHeading = commentsArray.length > 0 
    ? (<h2 className='comments-list__array-heading'>Users' comments:</h2>)
    : (<h2 className='comments-list__array-heading'>There is no comments yet, you could be the first</h2>);

  return (
    <div className='comments-list'>
      <form className='comments-list__form'>
        <h2 className='comments-list__form-heading'>Write a comment</h2>
        <div className='comments-list__text-box'>
          <textarea 
            className='comments-list__comment-text'
            name="" 
            id="" 
            cols={110} 
            rows={4}
            minLength={10}
            maxLength={255}
            required
          />
          <button className='comments-list__submit-button' type='submit'/>
        </div>
      </form>

      <div className='comments-list__array'>
        { commentsHeading }
        { commentsArray }
      </div>
    </div>
  )
}

export default CommentsList;