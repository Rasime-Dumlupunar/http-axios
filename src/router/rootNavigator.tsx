import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from '../screens/users';
import {
  ADDNEWPOST,
  ALBUMS,
  COMMENTS,
  PHOTOS,
  POSTS,
  TODOS,
  UPDATEPOST,
  USERDETAIL,
  USERS,
} from '../utils/routes';
import UserDetail from '../screens/userDetail';
import Posts from '../screens/posts';
import Comments from '../screens/comments';
import Albums from '../screens/albums';
import Photos from '../screens/photos';
import Todos from '../screens/todos';
import AddNewPost from '../screens/addNewPost';
import UpdatePost from '../screens/updatePost';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
      <Stack.Screen name={POSTS} component={Posts} />
      <Stack.Screen name={COMMENTS} component={Comments} />
      <Stack.Screen name={ALBUMS} component={Albums} />
      <Stack.Screen name={PHOTOS} component={Photos} />
      <Stack.Screen name={TODOS} component={Todos} />
      <Stack.Screen name={ADDNEWPOST} component={AddNewPost} />
      <Stack.Screen name={UPDATEPOST} component={UpdatePost} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootNavigator;
