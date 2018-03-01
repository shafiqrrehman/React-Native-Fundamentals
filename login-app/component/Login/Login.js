import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';

import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo} 
                    source={require('../../images/levis.png')} />
                <Text style={styles.title}>Levi Strauss And Co, known worldwide 
                        for its Levi's brand of denim jeans.</Text>
            </View>
            <View style={styles.formContainer}>
                <LoginForm />
            </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logo: {
        width: 200,
        height: 100
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        width: 240,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.9,
        fontWeight: 'bold'
    }
});

export default Login;
