import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Avatar from '../components/UI/avatar';
import { screenHeight } from '../utils/constants';
import {
  ArrowRight2,
  Gallery,
  MessageText,
  TickCircle,
} from 'iconsax-react-nativejs';
import { ALBUMS, POSTS, TODOS } from '../utils/routes';

const UserDetail: React.FC = ({ navigation, route }) => {
  const user = route.params.user;
  const menu = [
    {
      id: 1,
      title: 'Posts',
      icon: <MessageText size={30} color="#8740DFFF" variant="Bold" />,
      route: POSTS,
    },

    {
      id: 2,
      title: 'Albums',
      icon: <Gallery size={30} color="#8740DFFF" variant="Bold" />,
      route: ALBUMS,
    },

    {
      id: 3,
      title: 'Todos',
      icon: <TickCircle size={30} color="#8740DFFF" variant="Bold" />,
      route: TODOS,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <Avatar user={user} size="large" />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.menuContainer}>
        {menu.map(item => (
          <Pressable
            style={styles.menuItem}
            key={item.id}
            onPress={() => navigation.navigate(item.route, { userId: user.id })}
          >
            {item.icon}
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
            <ArrowRight2 size={30} color="#8740DFFF" variant="Bold" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  infoContainer: {
    height: screenHeight / 4,
    backgroundColor: '#eeefef',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
  },
  menuContainer: { marginTop: 20, padding: 10 },
  name: {
    fontSize: 30,
    marginVertical: 5,
    fontWeight: '700',
  },
  email: {
    fontSize: 20,
    color: 'gray',
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: 'darkgray',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserDetail;
