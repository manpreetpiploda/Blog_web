import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    step: 1,
    post: null,
    editPost: false,
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        setStep: (state, action) => {
            state.step = action.payload
        },
        setPost: (state, action) => {
            state.course = action.payload
        },
        setEditPost: (state, action) => {
            state.editCourse = action.payload
        },
        resetPostState: (state) => {
            state.step = 1
            state.course = null
            state.editCourse = false
        },
    }
})

export const { setStep, setPost, setEditPost, resetPostState }= postSlice.actions;

export default postSlice.reducer;