import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LogoImage from '../images/img.jpg';

class HeaderComponent extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Image source={LogoImage} />
            <Text style={styles.txt}>Sperant</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    txt: {
        flex: 1,
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    }
});

export default HeaderComponent;