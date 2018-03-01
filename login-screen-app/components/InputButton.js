import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Item, Input, Label } from 'native-base';

export default class InputButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Input 
                        style={styles.inpt} 
                        placeholder="Username" 
                        placeholderTextColor="#fff" 
                    />
                    <Input 
                        style={styles.inpt} 
                        placeholder="Password" 
                        placeholderTextColor="#fff" 
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inpt: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#fff',
        margin: 10,
        color: '#fff'
    }
});