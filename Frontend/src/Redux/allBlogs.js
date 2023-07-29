import { createSlice } from "@reduxjs/toolkit";

const initialState =[]

export const allBlogSlice = createSlice({
  name: "allBlogs",
  initialState,
  reducers: {

    allBlog: (state, action) => {
      return action.payload;
    },
  }
})

export const { allBlog} =
allBlogSlice.actions;

export default allBlogSlice.reducer;
