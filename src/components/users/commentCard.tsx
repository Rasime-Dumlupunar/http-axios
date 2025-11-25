import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CommentCard: React.FC = ({ comment }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>{comment.name.toUpperCase()}</Text>
      <Text style={styles.email}>{comment.email}</Text>
      <Text style={styles.body}>{comment.body}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  email: {
    fontSize: 20,
    color: 'blue',
  },
  body: {
    fontSize: 20,
    color: 'gray',
  },
});

export default CommentCard;
