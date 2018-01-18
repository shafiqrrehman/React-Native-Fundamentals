import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
