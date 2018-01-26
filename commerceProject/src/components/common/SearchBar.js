import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class SearchBar extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <TextInput />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        borderRadius:50
    }
}

export { SearchBar };