import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class PerfilRestaurantImage extends Component{
    render(){
        const {imageStylePlace} = styles;
        return(
            <View>
                <Image resizeMode='contain' style={imageStylePlace} source={require('../../images/icons/place_tem.png')}/>
            </View>
        );
    }
}

const styles = {
    imageStylePlace:{
        width:100,
        height:100
    }
}

export default PerfilRestaurantImage;