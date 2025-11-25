import { configureStore } from '@reduxjs/toolkit';
import users from './slice/usersSlice';

const store = configureStore({
  reducer: {
    users,
  },
});
export default store;
