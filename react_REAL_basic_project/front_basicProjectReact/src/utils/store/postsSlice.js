import {createSlice }from '@reduxjs/toolkit';
import {createPost }from '../../conection/postThunks';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder)=> {
    builder
      .addCase(createPost.pending, (state)=> {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state,action)=> {
        state.loading = false;
        state.posts.push(action.payload);// Add the new post to the state
      })
      .addCase(createPost.rejected, (state,action)=> {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default postsSlice.reducer;