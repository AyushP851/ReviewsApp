import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Styles, Images } from '../styles/globalStyles';
import Card from '../shared/card'

export default function ReviewDetails({ navigation }) {
  return (
    <View style={ Styles.container }>
      <Card>
        <Text style={ Styles.title }>{ navigation.getParam('title') }</Text>
        <Text style={ Styles.details }>{ navigation.getParam('body') }</Text>
        <View style={ styles.rate } >
          <Text style={ styles.text }>Rating :</Text>
          <Image source={Images.rating[navigation.getParam('rating')]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rate: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    borderTopWidth: 2,
    borderTopColor: '#eee',
  },
  text: {
    fontSize: 16,
    paddingRight: 15,
  },
})
