import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class SearchBar extends Component {
    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <TextInput underlineColorAndroid='transparent' placeholder={this.props.placeholder}/>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        borderRadius:50,
        height:38,
        paddingLeft:5,
        paddingRight:5
    }
}

export { SearchBar };