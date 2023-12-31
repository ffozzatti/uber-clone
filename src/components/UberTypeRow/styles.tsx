import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,

  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',

  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,

  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,

  },
  time: {
    color: '#5D5D5D'

  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',

  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,

  },
  
});