import React from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground, Dimensions } from 'react-native';
import picSierra from './images/Sierra-Spencer.png';
import picTanner from './images/Tanner-McTab.png';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
            <ImageBackground style={styles.pic} source={picSierra} >
              <Text style={[styles.userName]}>Sierra Spencer</Text>
            </ImageBackground>

            <ImageBackground style={styles.pic} source={picTanner} >
              <Text style={styles.userName}>Sierra Spencer</Text>
            </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,.2)'
  },
  pic: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    resizeMode: 'cover'
  },
  userName: {
    fontSize: 30,
    backgroundColor: 'rgba(0, 0, 0,.7)',
    color: 'white',
    padding: 10
  }
})



