import { Dispatch } from "@reduxjs/toolkit"
import { PostAction, PostActionsTypes } from "../types/post"
import api from '../../api/Api';

export const fetchPosts = (page: number, limit: number) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionsTypes.FETCH_POSTS });

      const posts = await api.getPosts(0, 15);

      dispatch({ type: PostActionsTypes.FETCH_POSTS_SUCCESS, payload: posts });
      dispatch(increasePageNumber())

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

// Examples for request
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