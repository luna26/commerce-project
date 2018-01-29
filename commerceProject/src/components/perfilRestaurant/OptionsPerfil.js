import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class OptionsPerfil extends Component{
    render(){
        const {mainContainerStyle} = styles;
        return(
            <View style={mainContainerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    mainContainerStyle:{
        flex:1,
        margin: 20,
        borderRadius:10,
        justifyContent:'space-around',
        paddingLeft:20,
        paddingRight:20
    }
}

export default OptionsPerfil;