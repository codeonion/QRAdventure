import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Button  } from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

/* Custom Components */
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

/* 3rd Party Components */
import { BarCodeScanner } from 'expo-barcode-scanner';

// https://youtu.be/Hf4MJH0jDb4?t=2188 n
const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  var dict = {
    "apple": "You have an Apple"
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(typeof(dict[data]));
    if(dict[data] != undefined){
      alert(dict[data]);
      return <h1>daw</h1>
    }else{
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  // const [items, setItems] = useState([
  //   {id: uuidv4(), text: 'Milk'},
  //   {id: uuidv4(), text: 'Potato'},
  //   {id: uuidv4(), text: 'Tomato'},
  //   {id: uuidv4(), text: 'Juice'},
  //   {id: uuidv4(), text: 'Bread'},
  // ]);

  // const deleteItem = (id) => {
  //   setItems(prevItems => {
  //     return prevItems.filter(item => item.id != id);
  //   });
  // }
  
  // const addItem = (text) => {
  //   if (!text) {
  //     Alert.alert("Error", "Cannot add empty records",[{text: "Ok"}]);
  //   } else {
      
  //     setItems(prevItems => {
  //       return [{id: uuidv4(), text}, ...prevItems];
  //     });
  //   }
  // }
  return (
    <View style={styles.contianer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      
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