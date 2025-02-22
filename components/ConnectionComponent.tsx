import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button } from 'react-native';
import { Connection } from '../Interfaces/Connection';
import ConnectionDetailsComponent from './ConnectionDetailsComponent';

const ConnectionComponent: React.FC<{ connection: Connection; index: number }> = ({ connection, index }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={openModal}>
      <View key={index} style={styles.connectionContainer}>
        <View style={styles.header}>
          <Text style={styles.routeText}>
            {connection.from.station.name} ➔ {connection.to.station.name}
          </Text>
          <Text style={styles.platformText}>Platform: {connection.from.platform}</Text>
        </View>
        <Text style={styles.durationText}>Duration: {formatDuration(connection.duration)}</Text>
        <Text style={styles.transfersText}>Transfers: {connection.transfers}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(connection.from.departure)}</Text>
          <View style={styles.line}></View>
          <Text style={styles.timeText}>{formatTime(connection.to.arrival)}</Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ConnectionDetailsComponent connection={connection} />
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const formatDuration = (duration: string) => {
  const regex = /(?:(\d+)d)?(?:([0-9]{2}):([0-9]{2}):([0-9]{2}))/;
  const match = duration.match(regex);
  if (!match) return duration;

  const days = match[1] ? `${match[1]}d ` : '';
  const hours = match[2] ? `${match[2]}h ` : '';
  const minutes = match[3] ? `${match[3]}min` : '';

  return `${days}${hours}${minutes}`.trim();
};

const formatTime = (timeToFormat: string | null): string => {
  return timeToFormat ? timeToFormat.substring(11, 16) : 'time unavailable';
};

const styles = StyleSheet.create({
  connectionContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  routeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#87CEEB',
  },
  platformText: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  durationText: {
    fontSize: 16,
    color: '#87CEEB',
    marginBottom: 5,
  },
  transfersText: {
    fontSize: 16,
    color: '#87CEEB',
    marginBottom: 15,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 3,
    backgroundColor: '#87CEEB',
    borderRadius: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
  },
});

export default ConnectionComponent;