import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, ActivityIndicator, TextInput, Switch, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { getPost } from './services/connection-service';
import ConnectionsComponent from './components/ConnectionsComponent';
import { TransportRequest, TransportResponse } from './Interfaces';

export default function App() {
  const [transportResponse, setTransportResponse] = useState<TransportResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000 + 3600000)); // Adjust for Swiss timezone
  const [isArrivalTime, setIsArrivalTime] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const fetchPost = async () => {
    try {
      const transportRequest: TransportRequest = {
        from,
        to,
        date: date.toISOString().split('T')[0],
        time: time.toTimeString().substring(0, 5),
        isArrivalTime: isArrivalTime ? '1' : '0',
      };
      const data = await getPost(transportRequest);
      setTransportResponse(data);
    } catch (error) {
      console.error('Error loading connections:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (from && to) {
      setLoading(true);
      fetchPost();
    }
  };

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onTimeChange = (event: any, selectedTime: Date | undefined) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>From</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter origin..."
        placeholderTextColor="#A9A9A9"
        value={from}
        onChangeText={setFrom}
      />

      <Text style={styles.label}>To</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter destination..."
        placeholderTextColor="#A9A9A9"
        value={to}
        onChangeText={setTo}
      />

      <Text style={styles.label}>Date</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>{date.toISOString().split('T')[0]}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={onDateChange}
        />
      )}

      <Text style={styles.label}>Time</Text>
      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.datePickerButton}>
        <Text style={styles.datePickerText}>{time.toTimeString().substring(0, 5)}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="clock"
          onChange={onTimeChange}
        />
      )}

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Is Arrival Time</Text>
        <Switch
          value={isArrivalTime}
          onValueChange={setIsArrivalTime}
          thumbColor={isArrivalTime ? '#87CEEB' : '#767577'}
          trackColor={{ false: '#767577', true: '#87CEEB' }}
        />
      </View>

      <Button title="Load" onPress={handleSubmit} color="#87CEEB" />

      <ScrollView>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#87CEEB" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
        {!loading && transportResponse && (
          <ConnectionsComponent connections={transportResponse.connections} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 20,
  },
  label: {
    color: '#87CEEB',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#2C2C2C',
    color: '#FFFFFF',
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loadingText: {
    color: '#87CEEB',
    marginTop: 10,
  },
  datePickerButton: {
    backgroundColor: '#2C2C2C',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  datePickerText: {
    color: '#FFFFFF',
  },
});
