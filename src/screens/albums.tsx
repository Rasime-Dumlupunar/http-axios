import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums, getPosts } from '../store/actions/usersActions';
import PostCard from '../components/users/postCard';
import AlbumsCard from '../components/users/albumsCard';

const Albums: React.FC = ({ navigation, route }) => {
  const { userId } = route.params;
  const { pendingAlbums, albums } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAlbums({
        userId: userId,
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      {pendingAlbums ? (
        <ActivityIndicator size={'large'} color={'gray'} />
      ) : (
        <FlatList
          data={albums}
          renderItem={({ item }) => <AlbumsCard album={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
});

export default Albums;
