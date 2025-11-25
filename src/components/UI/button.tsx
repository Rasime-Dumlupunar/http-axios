import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button: React.FC = props => {
  const { title } = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={{ fontSize: 30 }}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#37d67a',
    marginVertical: 20,
    padding: 10,
    borderRadius: 15,
  },
});

export default Button;
