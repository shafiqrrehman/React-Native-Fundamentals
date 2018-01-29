import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Book from './Book';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      leapYear: false,
      info: {
        type: 'Programming'
      }
    }
  }

  render() {
    let { leapYear } = this.state;
    const { info } = this.state;
    return (
      <View style={styles.container}>
        <Book 
          leapYear={ leapYear } 
          info={ info } 
          topics={ ['React', 'React Native', 'JavaScript'] } />
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
