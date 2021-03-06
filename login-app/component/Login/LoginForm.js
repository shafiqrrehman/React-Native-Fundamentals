import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput 
            placeholder="username or email"
            placeholderTextColor='rgba(255,255,255,.9)'
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />
        <TextInput 
            placeholder="password"
            placeholderTextColor='rgba(255,255,255,.9)'
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input} />
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,.3)',
        borderRadius: 2,
        marginBottom: 10,
        color: '#fff',
        paddingHorizontal: 20,
        fontSize: 18
    },
    buttonContainer: {
        backgroundColor: '#2574A9',
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    }
});

export default LoginForm;
