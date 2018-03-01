import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './component/Login/Login';

export default class App extends React.Component {
  render() {
    return (
        <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
