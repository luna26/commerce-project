import React, { Component } from 'react';
import { connect } from 'react-redux';
import {openSelectCity} from '../../actions';
import { Text, View } from 'react-native';
import {Input, Button} from '../common';
import LoginFacebook from './LoginFacebook';

class LoginForm extends Component{
    render(){
        const {containerFormStyle} = styles;
        return(
            <View style={containerFormStyle}>
                <Input label={'Usuario'} />
                <Input label={'Contraseña'} />
                <Button onPress={this.props.openSelectCity.bind(this)} label={'Iniciar Sesion'} />
                <LoginFacebook />
            </View>
        );
    }
}

const styles = {
    containerFormStyle:{
        alignSelf:'stretch',
        marginBottom:100,
        marginLeft:30,
        marginRight:30
    }
}

const mapStateToProps = state => {
    return {
        mainMenuData: state.mainMenuData
    };
};

export default connect(mapStateToProps, {openSelectCity})(LoginForm);