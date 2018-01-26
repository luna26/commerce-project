import React, {Component} from 'react';
import {Text, View} from 'react-native';

class HeaderLogin extends Component{
    render(){
        const {containerStyle, textColor} = styles;
        return(
            <View style={containerStyle}>
                <Text style={textColor} >Olvide la contraseña</Text>
            </View>
        );
    }
}

const styles ={
    containerStyle:{
        height:60,
        borderBottomWidth: 0.5,
        borderBottomColor:'#fff',
        justifyContent:'flex-end'
    },
    textColor:{
        color:'#fff',
        textAlign:'right',
        paddingBottom:10,
        paddingRight:10
    }
}

export default HeaderLogin;