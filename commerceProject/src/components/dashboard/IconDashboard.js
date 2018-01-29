import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

class IconDashboard extends Component {
    renderImage(icon) {
        switch (icon) {
            case 'icon_food':
                return require('../../images/icons/icon_food.png');
                break;
            case 'mechanic_icon':
                return require('../../images/icons/mechanic_icon.png');
                break;
        }
    }
    render() {
        const { containerStyle, iconContainerStyle, textStyle, imageStyle } = styles;
        return (
            <TouchableOpacity style={containerStyle} onPress={this.props.onPress}>
                <Image resizeMode='cover' style={imageStyle} source={this.renderImage(this.props.icon)} />
                <Text style={textStyle}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    containerStyle: {
        alignItems: 'center'
    },
    textStyle: {
        marginTop: 5
    },
    imageStyle: {
        height: 65,
        width: 65,
        borderRadius: 50
    }
}

export default IconDashboard;