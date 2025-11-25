import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const Custominput: React.FC = props => {
  const { label } = props;
  return (
    <View style={styles.container}>
      <Text style={{ margin: 10, fontSize: 30 }}>{label} </Text>
      <TextInput placeholder={label} style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});

export default Custominput;
