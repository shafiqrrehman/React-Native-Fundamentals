import React from 'react';
import { View, Text } from 'react-native';

export default class StaticProps extends React.Component {
    render() {
        return (
            <View>
                <Text>Book: {this.props.book}</Text>
                <Text>Author: {this.props.author}</Text>
                <Text onPress={this.props.updateEdition}>Edition: {this.props.edition}</Text>
            </View>
        );
    }
}