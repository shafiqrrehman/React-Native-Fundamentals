import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './component/Counter';
import Box from './component/Box';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter color={'darkblue'} size={36} />
        <Counter color={'steelblue'} size={46} />
        <Box />
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
