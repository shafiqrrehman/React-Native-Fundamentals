import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Button from './Button';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'React Native in Action!'
    }
  }

  componentWillMount() {
    console.log('about to mount...');
  }

  componentDidMount() {
    console.log('Mounted...');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.name}</Text>
        <Button title="Press Me!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
  }
});
