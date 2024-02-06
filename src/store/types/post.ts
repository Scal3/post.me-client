import { OnePost } from "../../api/types";

export interface PostState {
  posts: OnePost[];
  isLoading: boolean;
  page: number;
  limit: number;
  error: string;
}

export enum PostActionsTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
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

export type PostAction =
FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
