import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Connection } from '../Interfaces/Connection';

const ConnectionDetailsComponent: React.FC<{connection: Connection}> = ({ connection }) => {
    return(
        <View>
            <Text>{connection.from.station.name}</Text>
            <Text>{connection.to.station.name}</Text>
        </View>
    );
}

export default ConnectionDetailsComponent;