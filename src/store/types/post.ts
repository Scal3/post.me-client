import { OnePost } from "../../api/types";

export interface PostState {
  posts: OnePost[];
  postById: OnePost;
  isLoading: boolean;
  page: number;
  limit: number;
  error: string;
}

export enum PostActionsTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',

  INCREASE_PAGE_NUMBER = 'INCREASE_PAGE_NUMBER',

  FETCH_ONE_POST = 'FETCH_ONE_POST',
  FETCH_ONE_POST_SUCCESS = 'FETCH_ONE_POST_SUCCESS',
  FETCH_ONE_POST_ERROR = 'FETCH_ONE_POST_ERROR',
}

interface FetchPostsAction {
  type: PostActionsTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostActionsTypes.FETCH_POSTS_SUCCESS;
  payload: OnePost[];
}

interface FetchPostsErrorAction {
  type: PostActionsTypes.FETCH_POSTS_ERROR;
  payload: string;
}

interface IncreasePageNumberAction {
  type: PostActionsTypes.INCREASE_PAGE_NUMBER;
}

interface FetchOnePostAction {
  type: PostActionsTypes.FETCH_ONE_POST;
}

interface FetchOnePostSuccessAction {
  type: PostActionsTypes.FETCH_ONE_POST_SUCCESS;
  payload: OnePost;
}

interface FetchOnePostErrorAction {
  type: PostActionsTypes.FETCH_ONE_POST_ERROR;
  payload: string;
}

export type PostAction =
FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | IncreasePageNumberAction
  | FetchOnePostAction
  | FetchOnePostSuccessAction
  | FetchOnePostErrorAction;
