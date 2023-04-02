//store/root-reducer.js
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./redux-slices/user-slice.js";

const rootReducer = combineReducers({
  user: userReducer
  // add other reducers here if needed
});

export default rootReducer;
