import React from 'react';
import { View, Text } from 'react-native';

export default class StaticProps extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.book}</Text>
            </View>
        );
    }
}