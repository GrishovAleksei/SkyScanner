import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {store} from './store'
import {Provider} from 'react-redux'
import {Navigation} from './route'



export default function App() {
  return (
    <Provider store={store}>
      <View style={{flex:1}} key="generalView">
        <Navigation />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
