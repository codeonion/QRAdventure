import React, {useState} from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

// https://youtu.be/Hf4MJH0jDb4?t=2188 n
const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Potato'},
    {id: uuidv4(), text: 'Tomato'},
    {id: uuidv4(), text: 'Juice'},
    {id: uuidv4(), text: 'Bread'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
  
  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: uuidv4(), text}, ...prevItems];
    });
  }
  return (
    <View style={styles.contianer}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}  
      />
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