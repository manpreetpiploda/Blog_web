import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "../slices/authSlice";
import postSlice from "../slices/postSlice";
import profileSlice from "../slices/profileSlice";

const rootReducer = combineReducers({
    auth:authSlice,
    post:postSlice,
    profile:profileSlice,
})

export default rootReducer;