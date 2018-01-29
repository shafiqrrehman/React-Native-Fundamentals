import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataTypes from './Statesdt';
import StaticProps from './Props';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      edition: 'React Native in action !'
    }
  }

  updateEdition() {
    this.setState({
      edition: 'Express in action!'
    })
  }

  render() {

    const author = 'David Jhons';

    return (
      <View style={styles.container}>
        <DataTypes />
        <StaticProps 
          book='React Native Foundations' 
          author={author} 
          edition={this.state.edition}
          updateEdition={() => this.updateEdition()} />
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
