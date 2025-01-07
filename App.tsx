import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ConnectionRequest } from './TransportRequest';
import { useState } from 'react';

export default function App() {

  let connectionRequest: ConnectionRequest;

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isArrivalTime, setIsArrivalTime] = useState('');

  const handleSubmit = () => {
      
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>From</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={from}
        onChangeText={setFrom}
        onSubmitEditing={handleSubmit}
      >
      </TextInput>

      <Text style={styles.text}>To</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={to}
        onChangeText={setTo}
        onSubmitEditing={handleSubmit}
      >
      </TextInput>

      <Text style={styles.text}>Date</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={date}
        onChangeText={setDate}
        onSubmitEditing={handleSubmit}
      >
      </TextInput>

      <Text style={styles.text}>Time</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={time}
        onChangeText={setTime}
        onSubmitEditing={handleSubmit}
      >
      </TextInput>

      <Text style={styles.text}>Is Arrival Time</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={isArrivalTime}
        onChangeText={setIsArrivalTime}
        onSubmitEditing={handleSubmit}
      >
      </TextInput>

      <ScrollView>
        <View style={styles.connection_container}></View>
        <View style={styles.connection_container}></View>
        <View style={styles.connection_container}></View>
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
