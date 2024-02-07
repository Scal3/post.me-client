import "./single-post-page.css";

import React, { FC, useEffect } from 'react'
import MainLayout from '../../layouts/main-layout/MainLayout';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import { useActions } from "../../hooks/useActions";
import Post from "../../components/post/Post";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Spinner from "../../components/spinner/Spinner";

const SinglePostPage: FC = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { fetchOnePostById } = useActions();
  const { postById, isLoading } = useTypedSelector(state => state.post);
  const isPostLoaded = Object.keys(postById).length > 0;


  useEffect(() => {
    if (!postId) throw new Error("Wrong postId");

    const postIdNum = Number.parseInt(postId);

    if (Number.isNaN(postIdNum)) {
      navigate('/');

      return;
    }

    fetchOnePostById(postIdNum);
  }, []);

  return (
    <MainLayout>
      <div className='single-post-page'>
        {isLoading && <Spinner/>}

        <Header onButtonClick={console.log} onLogoClick={() => navigate("/")}/>
        {
          isPostLoaded && 
          <Post
            isLong={true} 
            username={postById.username} 
            heading={postById.heading} 
            text={postById.text} 
            createdAt={postById.createdAt} 
            comments={postById.comments}          
          />
        }
      </div>
    </MainLayout>
  )
}

export default SinglePostPage;