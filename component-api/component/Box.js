import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Box extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 250,
        height: 250,
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderColor: 'steelblue',
        borderRadius: 20
    }
});

export default Box;