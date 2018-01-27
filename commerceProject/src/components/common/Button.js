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
        borderColor:'#FF6F00', 
        borderRadius:50,
        marginTop:40,
        //marginLeft:30,
        //marginRight:30
    },
    textStyle:{
        textAlign:'center',
        padding:15,
        color:'#FF6F00'
    }
}

export {Button};