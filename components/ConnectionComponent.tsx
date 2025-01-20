import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Connection } from '../Interfaces/Connection';


const ConnectionComponent: React.FC<{connection: Connection, index: number}> = ({ connection, index }) => {
    
    const calculateTransfers = () => {
        return 2
    }

    return(
        <View key={index} style={styles.connectionContainer}>
                  <Text style={styles.routeText}>
                    {connection.from.station.name} ➔ {connection.to.station.name}
                  </Text>
                  <Text style={styles.text}>Platform: {connection.from.platform}</Text>
                  <Text style={styles.durationText}>Duration: {formatDuration(connection.duration)}</Text>
        
                  <Text style={styles.text}>{formatTime(connection.from.departure)}</Text>
                  <View style={styles.line}>
                    
                  </View>
                  <Text style={styles.text}>{formatTime(connection.to.arrival)}</Text>
                </View>
    );
}

const formatDuration = (duration: string) => {
    const regex = /(?:(\d+)d)?(?:([0-9]{2}):([0-9]{2}):([0-9]{2}))/;
    const match = duration.match(regex);
    if (!match) return duration;

    const days = match[1] ? `${match[1]}d ` : '';
    const hours = match[2] ? `${match[2]}h ` : '';
    const minutes = match[3] ? `${match[3]}min` : '';

    if(days === "00d " && hours === "00h ") {
        return `${minutes}`.trim();
    } else if(days === "00d ") {
        return `${hours}${minutes}`.trim();
    } else {
        return `${days}${hours}${minutes}`.trim();
    }
};
  
function formatTime(timeToFormat: string | null): string {
    if(!timeToFormat) {
        return 'time unavailable';
    } else {
        return timeToFormat.substring(11, 16);
    }
};

const styles = StyleSheet.create({
    connectionContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#575757',
        borderRadius: 8,
      },
      routeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
      },
      durationText: {
        fontSize: 14,
        color: '#dcdcdc',
        marginBottom: 15,
      },
      text: {
        color: '#ffffff'
      },
      line: {
        height: 5,
        backgroundColor: '#ffffff',
        borderRadius: 4
      },
      point: {
    
      }
})

export default ConnectionComponent;