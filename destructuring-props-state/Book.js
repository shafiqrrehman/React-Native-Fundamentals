import React from 'react';
import { View, Text } from 'react-native';

const Book = ({ book, updateEdition }) => {

        return (
            <View>
                <Text onPress={ updateEdition }>{book}</Text>
            </View>
        );
}

export default Book;