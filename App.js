import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header';
const App = () => {
  return (
    <View style={styles.contianer}>
      <Header />
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