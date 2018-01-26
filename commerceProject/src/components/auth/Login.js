import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View } from 'react-native';
import HeaderLogin from './HeaderLogin';
import LoginForm from './LoginForm';
import {Background} from '../common';

class Login extends Component {
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