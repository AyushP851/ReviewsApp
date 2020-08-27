import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
import { Styles } from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../shared/card'
import Form from "./form"

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: 'Fox News', rating: 1, body: 'Trump is the Owner', key: '1' },
    { title: 'CNN News', rating: 3, body: 'Anti Trump', key: '2' },
    { title: 'MSNBC News', rating: 4, body: 'Anti Trump but ...', key: '3' },
    { title: 'Gravitas', rating: 5, body: 'Anti World', key: '4' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={ Styles.container }>
      
      <Modal visible={ modalOpen } animationType='slide' >
        <View style={ styles.modalContent }>
          <Icon name='close' size={ 20 } onPress={() => setModalOpen(false)} style={ styles.modalClose } />  
          <Form />
        </View>
      </Modal>
      <Icon name='add' size={ 26 } onPress={() => setModalOpen(true)} style={ styles.modalOpen } />


      <FlatList
        data={ reviews }
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={ () => navigation.navigate('ReviewDetails', item) }>
            <Card>
              <Text style={ Styles.title }>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalOpen: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
  },
  modalClose: {
    alignSelf: 'flex-end',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
  },
})
