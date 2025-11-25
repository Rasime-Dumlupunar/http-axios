import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import UserCard from '../components/users/userCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/usersActions';

const Users: React.FC = ({ navigation }) => {
  const { users, error, loading } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  // const getUser = async () => {
  //   setLoading(true);
  //   // try {
  //   //   const users = await axios.get('https://randomuser.me/api/?results=20');
  //   //   setUsers(users.data.results);
  //   // } catch (error) {
  //   // } finally {
  //   //   setLoading(false);
  //   // }
  //   //   getRequest(USERS_URL, { results: 20, gender: 'female' })
  //   //     .then(response => {
  //   //       setUsers(response.data.results);
  //   //     })
  //   //     .catch(error => {
  //   //       setError(error.response.data.error);
  //   //     })
  //   //     .finally(() => {
  //   //       setLoading(false);
  //   //     });
  // };
  useEffect(() => {
    // getUser();
    dispatch(getUsers());
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color="green" />
      ) : (
        <FlatList
          ListEmptyComponent={
            error ? (
              <View>
                <Text style={styles.title}>Error</Text>
                <Text style={styles.error}>{error}</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.title}>Uyarı</Text>
                <Text style={styles.error}>Kullanıcı Bulunamadı</Text>
              </View>
            )
          }
          data={users}
          keyExtractor={item => item.id.value}
          renderItem={({ item }) => <UserCard user={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2B2CBFF',
  },
  title: {
    color: 'blue',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Users;
