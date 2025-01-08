import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getPost } from './services/connection-service';
import { TransportResponse } from './Interfaces/TransportResponse';
import { TransportRequest } from './Interfaces/TransportRequest';

export default function App() {

  const [transportResponse, setTransportResponse] = useState<TransportResponse | null>(null);

  const [loading, setLoading] = useState(false)

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isArrivalTime, setIsArrivalTime] = useState('');

  const fetchPost = async () => {
    try {
      let transportRequest: TransportRequest = {
        from: from,
        to: to,
        date: date,
        time: time,
        isArrivalTime: isArrivalTime   
      }
      const data = await getPost(transportRequest)
      setTransportResponse(data)
    } catch (error) {
      console.error("Fehler beim Laden der Connections: ", error
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = () => {
      if(from !== '' && to !== '') {
        setLoading(true);
        fetchPost()
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>From</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={from}
        onChangeText={setFrom}
      >
      </TextInput>

      <Text style={styles.text}>To</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={to}
        onChangeText={setTo}
      >
      </TextInput>

      <Text style={styles.text}>Date</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={date}
        onChangeText={setDate}
      >
      </TextInput>

      <Text style={styles.text}>Time</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={time}
        onChangeText={setTime}
      >
      </TextInput>

      <Text style={styles.text}>Is Arrival Time</Text>
      <TextInput 
        style={[styles.input, styles.text]}
        placeholder='...'
        value={isArrivalTime}
        onChangeText={setIsArrivalTime}
      >
      </TextInput>

      <Button title="Load" onPress={handleSubmit} />

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
