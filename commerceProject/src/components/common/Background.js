import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

class Background extends Component{
    render(){
        return(
            <LinearGradient colors={['#fff', '#fff']} style={{flex:1}}>
                {this.props.children}
            </LinearGradient>
        );
    }
}

export {Background};