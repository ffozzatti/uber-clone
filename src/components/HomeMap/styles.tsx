import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%', 
    backgroundColor: "#a0abff", 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  }
});