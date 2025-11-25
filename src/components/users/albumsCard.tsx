//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';

const AlbumsCard: React.FC = ({ album }) => {
  return (
    <Pressable style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/album.jpeg')}
      >
        <Text style={styles.text}>{album.title.toUpperCase()}</Text>
      </ImageBackground>
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
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 18,
    color: 'black',
    padding: 5,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});

export default AlbumsCard;
