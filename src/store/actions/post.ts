import { Dispatch } from "@reduxjs/toolkit"
import { PostAction, PostActionsTypes } from "../types/post"
import api from '../../api/Api';

export const fetchPosts = (page: number, limit: number) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionsTypes.FETCH_POSTS });

      const posts = await api.getPosts(page, limit);

      dispatch({ type: PostActionsTypes.FETCH_POSTS_SUCCESS, payload: posts });
      dispatch(increasePageNumber());

    } catch (err) {
      console.log(err);
      dispatch({
        type: PostActionsTypes.FETCH_POSTS_ERROR,
        payload: 'Error fetching all posts'
    })
    }
  }
}

export const increasePageNumber = (): PostAction => {
  return { type: PostActionsTypes.INCREASE_PAGE_NUMBER }
}

export const fetchOnePostById = (id: number) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionsTypes.FETCH_ONE_POST });

      const post = await api.getOnePostById(id);

      dispatch({ type: PostActionsTypes.FETCH_ONE_POST_SUCCESS, payload: post });
      
    } catch (err) {
      console.log(err);
      dispatch({
        type: PostActionsTypes.FETCH_ONE_POST_ERROR,
        payload: 'Error fetching one post'
    })
    }
  }
}

// Examples for request
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