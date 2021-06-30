import React, {useState} from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native'
import Header from './components/Header';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Potato'},
    {id: uuidv4(), text: 'Tomato'},
    {id: uuidv4(), text: 'Juice'},
    {id: uuidv4(), text: 'Bread'},
  ]);
  return (
    <View style={styles.contianer}>
      <Header title='Shopping List' />
      <FlatList data={items} renderItem={({item}) => (
        <Text>{item.text}</Text>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;