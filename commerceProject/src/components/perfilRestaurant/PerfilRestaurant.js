import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Text, View } from 'react-native';
import PerfilRestaurantImage from './PerfilImage';
import StarPerfil from './StarPerfil';
import LocationPerfil from './LocationPerfil';
import OptionsPerfil from './OptionsPerfil';
import OptionItem from './OptionItem';
import OverlayPerfil from './OverlayPerfil';
import {openOverlayPerfil} from '../../actions';


class PerfilRestaurant extends Component {
    renderOverlayPerfil(){
        if(this.props.perfilRestaurant.overlayPerfil){
            return <OverlayPerfil />;
        }
    }
    callStore(){
        Communications.phonecall('87486547', true)
        //Actions.perfilRestaurant();
    }
    render() {
        console.log(this.props);
        const {containerStyle, imageContainerStyle, starsContainerStyle, localtionContainerMain, optionsStyle} = styles;
        return (
            <View style={containerStyle}>
                <View style={imageContainerStyle}>
                    <PerfilRestaurantImage />
                </View>
                <View style={starsContainerStyle}>
                    <StarPerfil />
                    <StarPerfil />
                    <StarPerfil />
                    <StarPerfil />
                    <StarPerfil />
                </View>
                <View style={localtionContainerMain}>
                    <LocationPerfil />
                </View>
                <View style={optionsStyle}>
                    <OptionsPerfil>
                        <OptionItem label={'Menu'}/>
                        <OptionItem label={'Llamar'} onPress={this.callStore.bind(this)}/>
                        <OptionItem label={'Informacion'} onPress={this.props.openOverlayPerfil.bind(this, true)}/>
                    </OptionsPerfil>
                </View>
                {this.renderOverlayPerfil()}
            </View>
        );
    }
}

const styles = {
    containerStyle:{
        flex:1,
        backgroundColor:'#fff'
    },
    imageContainerStyle:{
        marginTop:30,
        alignItems:'center',
        marginLeft:10,
    },
    starsContainerStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingLeft:30,
        paddingRight:30,
        marginTop:30,
    },
    localtionContainerMain:{
        marginTop:30,
    },
    optionsStyle:{
        flex:1
    }
}


const mapStateToProps = state => {
    return {
        perfilRestaurant: state.perfilReducer        
    };
};

export default connect(mapStateToProps, {openOverlayPerfil})(PerfilRestaurant)