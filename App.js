import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.text}>Hello World</Text>
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
})
export default App;