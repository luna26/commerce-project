import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class OptionItem extends Component{
    render(){
        const {mainContainerStyle, textStyle} = styles;
        return(
            <TouchableOpacity style={mainContainerStyle} onPress={this.props.onPress}>
                <Text style={textStyle}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    mainContainerStyle:{
        padding:10,
        borderRadius:50,
        backgroundColor:'#FBC02D'
    },
    textStyle:{
        textAlign:'center',
        color:'#fff'
    }
}

export default OptionItem;