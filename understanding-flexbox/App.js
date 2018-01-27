import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Bale</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Benzema</Text>
        <Text style={styles.defaultText}>Cristiano</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flexDirection: 'row'
  },
  defaultText: {
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold'
  }
});
