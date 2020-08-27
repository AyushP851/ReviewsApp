import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: 'ComicNeue-Bold',
    fontSize: 40,
  },
  details: {
    fontFamily: 'ComicNeue-Bold',
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#333',
    padding: 5,
    margin: 10,
  },
});

export const Images = {
  rating: {
    '1' : require('../assets/rating-1.png'),
    '2' : require('../assets/rating-2.png'),
    '3' : require('../assets/rating-3.png'),
    '4' : require('../assets/rating-4.png'),
    '5' : require('../assets/rating-5.png'),
  }
}
