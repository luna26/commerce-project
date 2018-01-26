import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

class Background extends Component{
    render(){
        return(
            <LinearGradient colors={['#FF6F00', '#FFD54F']} style={{flex:1}}>
                {this.props.children}
            </LinearGradient>
        );
    }
}

export {Background};