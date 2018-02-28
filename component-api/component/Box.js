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
        width: 150,
        height: 150,
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderColor: 'steelblue',
        borderRadius: 20
    }
});

export default Box;