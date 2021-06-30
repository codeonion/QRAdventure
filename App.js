import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.contianer}>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
});

export default App;