import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class StarPerfil extends Component{
    render(){
        const {imageStyleStar} = styles;
        return(
            <View>
                <Image resizeMode='contain' style={imageStyleStar} source={require('../../images/icons/star.png')}/>
            </View>
        );
    }
}

const styles = {
    imageStyleStar:{
        width:30,
        height:30
    }
}

export default StarPerfil;