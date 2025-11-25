import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { screenHeight, screenWidth } from '../../utils/constants';
import { Add } from 'iconsax-react-nativejs';

const FloatingActionButton: React.FC = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={40} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    borderRadius: 1000,
    bottom: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8250FFE2',
    position: 'absolute',
  },
});

export default FloatingActionButton;
