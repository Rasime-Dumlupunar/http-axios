import React, { use } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Avatar from '../UI/avatar';
import { useNavigation } from '@react-navigation/native';
import { USERDETAIL } from '../../utils/routes';

const UserCard: React.FC = ({ user }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAIL, { user: user })}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        {/* <Image source={{ uri: item.picture }} style={styles.image} /> */}
        <Avatar user={user} size="medium" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.sub}>{user.email}</Text>
        <Text style={styles.sub}>{user.phone}</Text>
        <Text style={styles.sub}>
          {user.address.city} - {user.address.zipcode}
        </Text>
        <Text style={styles.sub}>{user?.website}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 8,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
    flex: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
  },
  sub: {
    fontSize: 16,
    color: 'dark-gray',
    marginVertical: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default UserCard;
