import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../store/actions/usersActions';
import TodosCard from '../components/users/todosCard';

const Todos: React.FC = ({ navigation, route }) => {
  const { userId } = route.params;
  const { pendingTodos, todos } = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getTodos({
        userId: userId,
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      {pendingTodos ? (
        <ActivityIndicator size={'large'} color={'gray'} />
      ) : (
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodosCard todo={item} />}
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

export default Todos;
