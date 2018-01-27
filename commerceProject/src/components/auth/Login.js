import React, { Component } from 'react';
import SplashScreen from 'react-native-smart-splash-screen'
import { Text, View } from 'react-native';
import HeaderLogin from './HeaderLogin';
import LoginForm from './LoginForm';
import {Background} from '../common';

class Login extends Component {
    componentDidMount () {
        //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
        SplashScreen.close({
           animationType: SplashScreen.animationType.scale,
           duration: 850,
           delay: 500,
        })
   }
    render() {
        const { container } = styles;
        return (
            <Background>
                <HeaderLogin />
                <View style={container}>
                    <LoginForm />
                </View>
            </Background>
        );
    }
}

const styles = {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginRight:20
    }
}

export default Login;