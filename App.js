import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
  async function registerForPushNotificaiton(){
    const {status} = await Permissions.getAsync(Permissions.Notifications);
    if(status != "granted"){const {status} = await Permissions.getAsync(Permissions.Notifications);}
    if(status != "granted"){alert("Gailed to get the  push token");return;}

    token = (await Notifications.getExpoPushTokenAsync()).data;

  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
