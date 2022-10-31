import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from './features/counter/counter.slice'
import logger from 'redux-logger'
import boxSlice from "./features/box/box.slice";
import user2slice from "./features/box/user2.slice";
import user1Slice from "./features/box/user1.slice";

const reducer = combineReducers({
  count: counterSlice,
  box: boxSlice,
  user1:user1Slice,
  user2:user2slice
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
