import React from 'react';
import {View, Text} from 'react-native';

class StateExp extends React.Component {
    constructor() {
        super();
        this.state = {
            year: 2016,
            name: 'Wayn Shakespeare'
        }
    }

    updateState() {
        this.setState({
            year: 2017,
        })
    }

    render() {
        return (
            <View>
                <Text>My name is: {this.state.name}</Text>
                <Text onPress={() => updateState()}>I have been working on React Native since {this.state.year}</Text>
            </View>
        );
    }
}

export default StateExp;