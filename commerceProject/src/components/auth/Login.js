import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import { Text, View } from 'react-native';
import HeaderLogin from './HeaderLogin';
import LoginForm from './LoginForm';
import {Background} from '../common';

class Login extends Component {
    componentDidMount(){
        setTimeout(() =>{
            SplashScreen.hide();
        }, 4000);
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

//android:background="@mipmap/launch_screen"

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