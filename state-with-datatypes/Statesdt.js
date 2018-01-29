import React from 'react';
import { View, Text } from 'react-native';

class DataTypes extends React.Component {
    constructor() {
        super();
        this.state = {
            year: 2016,
            leapYear: true,
            info: {
                paperback: true,
                type: 'Programming',
                length: '365 pages'
            }
        }
    }

    render() {

        let leapYear = <Text>This is not leap year !</Text>
        if (this.state.leapYear) {
            leapYear = <Text>This is leap year !</Text>
        }

        return (
            <View>
                <Text>{this.state.year}</Text>
                <Text>Legnth: {this.state.info.length}</Text>
                <Text>Type: {this.state.info.type}</Text>
                {leapYear}
            </View>
        );
    }
}

export default DataTypes;