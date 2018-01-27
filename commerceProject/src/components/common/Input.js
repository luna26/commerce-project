import React, { Component } from 'react';
import {TextInput, View, Text} from 'react-native';

class Input extends Component{
    render(){
        const {textInputStyle} = styles;
        return(
            <View>
                <Text style={textInputStyle}>{this.props.label}</Text>
                <TextInput />
            </View>
        );
    }
}

styles = {
    textInputStyle:{
        color:'#FF6F00',
        marginTop:30
    }
}

export {Input};