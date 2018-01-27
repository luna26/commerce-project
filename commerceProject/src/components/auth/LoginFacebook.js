import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class LoginFacebook extends Component{
    render(){
        const {logoContainer, logoImage, textStyle} = styles;
        return(
            <View style={logoContainer}>
                <Image style={logoImage} resizeMode="contain" source={require('../../images/icons/facebook_logo.png')} />
                <Text style={textStyle}>Iniciar sesion usando Facebook</Text>
            </View>
        );
    }
}

const styles = {
    logoImage:{
        height:30,
        width:40
    },
    logoContainer:{
        borderWidth: 1,
        borderColor:'#3b5998', 
        borderRadius:50,
        alignItems:'center',
        marginTop:30,
        flexDirection:'row',
        padding:12
    },
    textStyle:{
        marginRight:10,
        color:'#3b5998'
    }
}
export default LoginFacebook;