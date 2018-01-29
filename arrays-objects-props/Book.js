import React from 'react';
import { View, Text } from 'react-native';

const BookDisplay = (props) => {
    let leapYearr;
    let { topics, leapYear } = props;
    const { info } = props;

    topics = topics.map((topic, i) => {
        return <Text key={i}>{ topic }</Text>
    })

    if (leapYear) {
        leapYearr = <Text>This is leap year.</Text>
    } else {
        leapYearr = <Text>This is not leap year !</Text>
    }
    
    return (
        <View>
            {leapYearr}
            <Text>Book Type: {info.type}</Text>
            {topics}
        </View>
    );
}

export default BookDisplay;