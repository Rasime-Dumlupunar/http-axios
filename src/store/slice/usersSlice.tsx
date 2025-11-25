import { createSlice } from '@reduxjs/toolkit';
import {
  addNewPost,
  getAlbums,
  getComments,
  getPosts,
  getTodos,
  getUsers,
} from '../actions/usersActions';

const initialState = {
  users: [],
  posts: [],
  comments: [],
  albums: [],
  photos: [],
  todos: [],
  pending: false,
  pendingPost: false,
  pendingAlbums: false,
  pendingTodos: false,
  pendingComments: false,
  error: '',
  errorPost: '',
  errorAlbums: '',
  errorTodos: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, state => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.pending = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload as string;
      })
      .addCase(getPosts.pending, state => {
        state.pendingPost = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.pendingPost = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.pendingPost = false;
        state.errorPost = action.payload as string;
      })
      .addCase(getAlbums.pending, state => {
        state.pendingAlbums = true;
      })
      .addCase(getAlbums.fulfilled, (state, action) => {
        state.pendingAlbums = false;
        state.albums = action.payload;
      })
      .addCase(getAlbums.rejected, (state, action) => {
        state.pendingAlbums = false;
        state.errorAlbums = action.payload as string;
      })
      .addCase(getTodos.pending, state => {
        state.pendingTodos = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.pendingTodos = false;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.pendingTodos = false;
        state.errorTodos = action.payload as string;
      })
      .addCase(getComments.pending, state => {
        state.pendingComments = true;
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.pendingComments = false;
        state.comments = action.payload;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.pendingComments = false;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
      });
  },
});
export const {} = usersSlice.actions;
export default usersSlice.reducer;
