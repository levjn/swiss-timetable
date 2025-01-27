import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Connection } from '../Interfaces/Connection';

const ConnectionDetailsComponent: React.FC<{ connection: Connection }> = ({ connection }) => {
  const formatTime = (timeToFormat: string | null): string => {
    if (!timeToFormat) return 'time unavailable';
    const date = new Date(timeToFormat);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Connection Details</Text>
      
      <Text style={styles.label}>From:</Text>
      <Text style={styles.value}>{connection.from.station.name}</Text>
      
      <Text style={styles.label}>To:</Text>
      <Text style={styles.value}>{connection.to.station.name}</Text>
      
      <Text style={styles.label}>Departure:</Text>
      <Text style={styles.value}>{formatTime(connection.from.departure)}</Text>
      
      <Text style={styles.label}>Arrival:</Text>
      <Text style={styles.value}>{formatTime(connection.to.arrival)}</Text>
      
      <Text style={styles.label}>Platform:</Text>
      <Text style={styles.value}>{connection.from.platform}</Text>
      
      <Text style={styles.label}>Duration:</Text>
      <Text style={styles.value}>{connection.duration}</Text>
      
      <Text style={styles.label}>Transfers:</Text>
      <Text style={styles.value}>{connection.transfers}</Text>
      
      <Text style={styles.label}>Sections:</Text>
      {connection.sections.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionHeader}>{section.departure.station.name} ➔ {section.arrival.station.name}</Text>
          
          <Text style={styles.label}>Checkpoints:</Text>
          {section.journey.passList.map((checkpoint, cpIndex) => (
            <View key={cpIndex} style={styles.checkpointContainer}>
              <Text style={styles.checkpointText}>{checkpoint.station.name}</Text>
              <Text style={styles.checkpointText}>Arrival: {formatTime(checkpoint.arrival)}</Text>
              <Text style={styles.checkpointText}>Departure: {formatTime(checkpoint.departure)}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1F1F1F',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  sectionContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#87CEEB',
    marginBottom: 10,
  },
  checkpointContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#3C3C3C',
    borderRadius: 8,
  },
  checkpointText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default ConnectionDetailsComponent;