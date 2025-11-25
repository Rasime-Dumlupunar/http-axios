import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../store/actions/usersActions';
import CommentCard from '../components/users/commentCard';
import { ActivityIndicator } from 'react-native';

const Comments: React.FC<Props> = ({ route }) => {
  const { postId } = route.params;
  const dispatch = useDispatch();
  const { comments, pendingComments } = useSelector(state => state.users);
  useEffect(() => {
    dispatch(getComments(postId));
  }, []);
  return (
    <View style={styles.container}>
      {pendingComments ? (
        <ActivityIndicator size={'large'} color={'gray'} />
      ) : (
        <FlatList
          data={comments}
          renderItem={({ item }) => <CommentCard comment={item} />}
        />
      )}
    </View>
  );
};

Comments.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Comments;
