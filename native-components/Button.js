import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Button = (props) => (
    <TouchableHighlight>
        <Text>{props.title}</Text>
    </TouchableHighlight>
)

export default Button;