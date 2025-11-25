import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getInitials } from '../../utils/function';

const Avatar: React.FC = ({ user, size = 'medium' }) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: size == 'medium' ? 65 : 100,
          height: size == 'medium' ? 65 : 100,
        },
      ]}
    >
      <Text style={styles.avatar}>{getInitials(user.name)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8250FFE2',
    borderRadius: 100,
  },
  avatar: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Avatar;
