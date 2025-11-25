import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/actions/usersActions';
import PostCard from '../components/users/postCard';
import FloatingActionButton from '../components/UI/floatingActionButton';
import { ADDNEWPOST } from '../utils/routes';

const Posts: React.FC = ({ navigation, route }) => {
  const { userId } = route.params;
  const { pendingPost, errorPost, posts } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getPosts({
        userId: userId,
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      {pendingPost ? (
        <ActivityIndicator size={'large'} color={'gray'} />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard post={item} userId={userId} />}
        />
      )}
      <FloatingActionButton
        onPress={() => navigation.navigate('AddNewPost', { userId })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});

export default Posts;
