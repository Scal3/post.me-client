import { PostState, PostAction, PostActionsTypes } from "../types/post"

const initialState: PostState = {
  posts: [],
  isLoading: false,
  page: 0,
  limit: 20,
  error: ""
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionsTypes.FETCH_POSTS:
      return {...state, isLoading: true}
    case PostActionsTypes.FETCH_POSTS_SUCCESS:
      return {...state, isLoading: false, posts: action.payload}
    case PostActionsTypes.FETCH_POSTS_ERROR:
      return {...state, isLoading: false, error: action.payload}
    default:
      return state
  }
}