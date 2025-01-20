import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransportResponse } from '../Interfaces/TransportResponse';
import ConnectionComponent from './ConnectionComponent';

const ConnectionsComponent: React.FC<TransportResponse> = ({ connections }) => {
  return (
    <View style={styles.container}>
      {connections.map((connection, index) => (
        <ConnectionComponent index={index} connection={connection}></ConnectionComponent>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default ConnectionsComponent;
