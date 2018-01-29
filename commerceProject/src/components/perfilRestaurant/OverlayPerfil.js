import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import {closeOverlayPerfil} from '../../actions';
import OptionItem from './OptionItem';

class OverlayPerfil extends Component {
    render() {
        const { mainContainerStyle, containerOptions } = styles;
        return (
            <View style={mainContainerStyle}>
                <View style={containerOptions}>
                    <OptionItem label={'Calificar'} />
                    <OptionItem label={'Galeria'} />
                    <OptionItem label={'Horario'} />
                    <OptionItem label={'Atras'} onPress={this.props.closeOverlayPerfil.bind(this,false)}/>
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainerStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(255,111,0,0.9)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent:'center'
    },
    containerOptions:{
        opacity: 1,
        justifyContent:'space-around',
        flex:0.5,
        paddingLeft:30,
        paddingRight:30
    }
}

const mapStateToProps = state => {
    return {
        perfilRestaurant: state.perfilReducer        
    };
};

export default connect(mapStateToProps, {closeOverlayPerfil})(OverlayPerfil)