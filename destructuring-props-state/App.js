import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Book from './Book';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      edition: 'React in action !'
    }
  }

  updateEdition() {
    this.setState({
      edition: 'React Native in Action !'
    })
  }

  render() {
    console.log(this.state.edition)
    return (
      <View style={styles.container}>
        <Book book="React in action!" updateEdition={() => this.updateEdition()} />
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
