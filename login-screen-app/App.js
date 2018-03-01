import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderComponent from './components/Logo';
import InputButton from './components/InputButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <InputButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    justifyContent: 'center'
  },
});
