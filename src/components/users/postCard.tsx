//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import { COMMENTS, UPDATEPOST } from '../../utils/routes';
import { Edit2 } from 'iconsax-react-nativejs';
import { Trash } from 'iconsax-react-nativejs';
import { screenWidth } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/actions/usersActions';

const PostCard: React.FC = ({ post, userId }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => navigation.navigate(COMMENTS, { postId: post.id })}
      style={styles.container}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>{post.title.toUpperCase()}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(UPDATEPOST, { post: post, userId: userId })
            }
            style={{ marginRight: 10 }}
          >
            <Edit2 color="blue" variant="Bold" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(deletePost(post.id))}
            style={{ marginRight: 30 }}
          >
            <Trash color="red" variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.body}>{post.body}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 5,
    color: 'black',
    width: screenWidth - 100,
  },
  body: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 5,
    width: screenWidth - 30,
  },
});

export default PostCard;
