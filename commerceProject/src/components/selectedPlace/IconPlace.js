import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class IconPlace extends Component {
    render() {
        const { mainContainerStyle, imageStyle, textStyle } = styles;
        return (
            <View style={mainContainerStyle}>
                <Image style={imageStyle} resizeMode='contain' source={require('../../images/icons/place_tem.png')} />
                <Text style={textStyle}>{this.props.label}</Text>
            </View>
        );
    }
}

const styles = {
    mainContainerStyle: {
        alignItems:'center',
        marginLeft:10
    },
    imageStyle:{
        width:70,
        height:50
    },
    textStyle:{
        textAlign:'center'
    }
}

export default IconPlace;