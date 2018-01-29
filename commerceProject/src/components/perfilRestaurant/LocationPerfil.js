import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View  } from 'react-native';

class LocationPerfil extends Component{
    render(){
        const {containerImageStyleLocation, imageLocationStyle, locationStyle, textLocation} = styles;
        return(
            <TouchableOpacity style={containerImageStyleLocation}>
                <Image style={imageLocationStyle} resizeMode='stretch' source={require('../../images/icons/location.png')}/>
                <View style={locationStyle}>
                    <Text style={textLocation}>Ubicacion</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    containerImageStyleLocation:{
    },
    imageLocationStyle:{
        height:90
    },
    locationStyle:{ 
        position:'absolute',
        left:0,
        right:0,
        justifyContent:'center',
        bottom: 0,
        top:0
    },
    textLocation:{
        textAlign:'center',
        backgroundColor:'#FBC02D',
        marginLeft:50,
        marginRight:50,
        padding:12,
        borderRadius:50
    }
}


export default LocationPerfil;