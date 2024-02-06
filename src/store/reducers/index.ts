import { combineReducers } from "@reduxjs/toolkit";

import { postReducer } from "./post";

export const rootReducer = combineReducers({
  post: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;