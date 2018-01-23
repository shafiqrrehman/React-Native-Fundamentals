import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({ inputValue, inputChange }) => {
    //console.log(inputValue)
    //console.log(inputChange)
   return <View style={styles.inputContainer}>
        <TextInput 
            value={inputValue}
            style={styles.input} 
            placeholder="What's to be done?" 
            placeholderTextColor='#2C3E50'
            selectionColor='#666666' 
            onChangeText={inputChange}
         />
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#013243',
        shadowOffset: { width: 2, height: 2 }
    },

    input: {
        height: 60,
        backgroundColor: '#ECF0F1',
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default Input;