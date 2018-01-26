import React, { Component } from 'react';
import {TextInput, View, Text} from 'react-native';

class Input extends Component{
    render(){
        const {textInputStyle} = styles;
        return(
            <View>
                <Text>{this.props.label}</Text>
                <TextInput />
            </View>
        );
    }
}

styles = {
    textInputStyle:{

    }
}

export {Input};