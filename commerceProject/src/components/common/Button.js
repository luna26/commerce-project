import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class Button extends Component{
    render(){
        const {containerStyle, textStyle} = styles;
        return(
            <TouchableOpacity style={containerStyle} onPress={this.props.onPress}>
                <Text style={textStyle}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles={
    containerStyle:{
        borderWidth: 1,
        borderColor:'#fff', 
        borderRadius:50,
        marginTop:20
    },
    textStyle:{
        textAlign:'center',
        padding:10,
        color:'#fff'
    }
}

export {Button};