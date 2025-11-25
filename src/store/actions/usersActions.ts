import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getRequest,
  postRequest,
  patchRequest,
  putRequest,
  deleteRequest,
} from '../../service/verbs';
import {
  ALBUMS_URL,
  COMMENTS_URL,
  POSTS_URL,
  TODOS_URL,
  USERS_URL,
} from '../../service/url';
import { Alert } from 'react-native';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (values, { rejectWithValue }) => {
    try {
      const response = await getRequest(USERS_URL, values);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.message || 'Bir hata oluştu');
    }
  },
);
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (values, { rejectWithValue }) => {
    try {
      const response = await getRequest(POSTS_URL, values);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.message || 'Bir hata oluştu');
    }
  },
);
export const getAlbums = createAsyncThunk(
  'albums/getAlbums',
  async (values, { rejectWithValue }) => {
    try {
      const response = await getRequest(ALBUMS_URL, values);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.message || 'Bir hata oluştu');
    }
  },
);
export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (values, { rejectWithValue }) => {
    try {
      const response = await getRequest(TODOS_URL, values);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.message || 'Bir hata oluştu');
    }
  },
);
export const getComments = createAsyncThunk(
  'users/getComments',
  async (values, { rejectWithValue }) => {
    const url = `${POSTS_URL}/${values.postId}/${COMMENTS_URL}`;

    try {
      const response = await getRequest(url);
      console.log('yorumlar', response.data);
      return response.data; // <-- jsonplaceholder için bu gerekli
    } catch (error: any) {
      return rejectWithValue(error?.response?.message || 'Bir hata oluştu');
    }
  },
);
export const addNewPost = createAsyncThunk(
  'users/addNewPost',
  async (values, { rejectWithValue }) => {
    const url = `${POSTS_URL}`;

    try {
      const response = await postRequest(url, values);
      console.log('ekleme durumu', response);
      if (response.status === 201) {
        Alert.alert('Başarılı', 'Post başarılı bir şekilde eklendi');
      }
      return response.data; // <-- jsonplaceholder için bu gerekli
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);
export const updatePost = createAsyncThunk(
  'users/updatePost',
  async (values, { rejectWithValue }) => {
    const url = `${POSTS_URL}/${values.id}`;

    try {
      const response = await patchRequest(url, values);
      console.log('ekleme durumu', response);
      if (response.status === 200) {
        Alert.alert('Başarılı', 'Post başarılı bir şekilde güncellendi');
      }
      console.log(response);
      return response.data; // <-- jsonplaceholder için bu gerekli
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.message);
    }
  },
);
export const updateAllPost = createAsyncThunk(
  'users/updateAllPost',
  async (values, { rejectWithValue }) => {
    const url = `${POSTS_URL}/${values.id}`;

    try {
      const response = await putRequest(url, values);
      console.log('ekleme durumu', response);
      if (response.status == 200) {
        Alert.alert('Başarılı', 'Post başarılı bir şekilde güncellendi');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);
export const deletePost = createAsyncThunk(
  'users/deletePost',
  async (postId, { rejectWithValue }) => {
    const url = `${POSTS_URL}/${postId}`;

    try {
      const response = await deleteRequest(url);
      console.log('ekleme durumu', response);
      if (response.status == 200) {
        Alert.alert('Başarılı', 'Post başarılı bir şekilde silindi');
      }
      return response.data; // <-- jsonplaceholder için bu gerekli
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  },
);
