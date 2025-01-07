import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.connection_container}></View>
      </ScrollView>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c4c4c',
    paddingTop: 50
    
  },
  text: {
    color: '#fff'
  },
  input: {
    backgroundColor: '#575757'
  },
  connection_container: {
    margin: 25,
    height: 100,
    backgroundColor: '#575757'
  }
});
