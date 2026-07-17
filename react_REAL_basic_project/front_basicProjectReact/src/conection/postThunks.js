import {createAsyncThunk }from '@reduxjs/toolkit';

export const createPost = createAsyncThunk(
  'posts/addListItem',// Action type prefix
  async (postData,thunkAPI)=> {
    try {
      const response = await fetch('http://127.0.0.1:3001/urls/addList', { 
        //without the localhost, it does not work. It is necessary to use the IP address of the local machine
        //Without the https:// it uses the url of the front, and it does not work. It is necessary to use the full url of the backend
        //In 127.0.0.1 needs the http://
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      const newPost = await response.json();
      return newPost;// Becomes the `action.payload` in the fulfilled action
    }catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);