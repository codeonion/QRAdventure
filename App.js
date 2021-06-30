import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.text}>Hello World</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {color:'darkslateblue', fontSize: 30},
  img:{width:100, height:100},
})
export default App;