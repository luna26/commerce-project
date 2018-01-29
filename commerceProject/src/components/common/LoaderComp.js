import React, { Component } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoaderComp extends Component{
    componentDidMount(){
        setTimeout(function(){
            console.log('cuantas');
            Actions.dashboard();
        }, 3000)
    }
    render(){
        const {containerStyle, imageStyle, indicator} = styles;
        return(
            <View style={containerStyle}>
                <View>
                    <Image style={imageStyle} source={require('../../images/icons/ic_icon.png')} />
                    <ActivityIndicator style={indicator} size="large" color="#fff" />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle:{
        backgroundColor:'#FF6F00',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        width:120,
        height:120
    },
    indicator:{
        marginTop:30
    }
}

export default LoaderComp;