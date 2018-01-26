import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class IconDashboard extends Component {
    render() {
        const { containerStyle, iconContainerStyle, textStyle } = styles;
        return (
            <TouchableOpacity style={containerStyle} onPress={this.props.onPress}>
                <View style={iconContainerStyle}></View>
                <Text style={textStyle}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    containerStyle: {
    }, 
    iconContainerStyle:{
        backgroundColor:'#000',
        height:80,
        width:80,
        borderRadius:10
    },
    textStyle:{
        marginTop:5
    }
}

export default IconDashboard;