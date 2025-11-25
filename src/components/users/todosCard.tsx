//import liraries
import { CloseCircle, TickCircle } from 'iconsax-react-nativejs';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodosCard: React.FC = ({ todo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title.toUpperCase()}</Text>
      <Text style={styles.body}>{todo.body}</Text>
      {todo.completed ? (
        <View style={styles.statusContainer}>
          <TickCircle size={32} color="#37d67a" variant="Bold" />
          <Text>Tamamlandı</Text>
        </View>
      ) : (
        <View style={styles.statusContainer}>
          <CloseCircle size={32} color="#f47373" variant="Bold" />
          <Text>Tamamlanmadı!</Text>
        </View>
      )}
    </View>
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
    fontSize: 20,
    fontWeight: '700',
  },
  body: {
    fontSize: 18,
    color: 'gray',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default TodosCard;
