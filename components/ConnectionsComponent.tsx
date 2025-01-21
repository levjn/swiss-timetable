import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TransportResponse } from '../Interfaces/TransportResponse';
import ConnectionComponent from './ConnectionComponent';

const ConnectionsComponent: React.FC<TransportResponse> = ({ connections }) => {
  return (
    <View style={styles.container}>
      {connections.map((connection, index) => (
        <ConnectionComponent key={index} index={index} connection={connection} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#1F1F1F',
  },
});

export default ConnectionsComponent;
