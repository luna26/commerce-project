import React, { Component } from 'react';
import { connect } from 'react-redux';
import {openDashboard} from '../../actions';
import { Text, View } from 'react-native';
import { Background, SearchBar } from '../common/';
import HeaderSelectCity from './HeaderSelectCity';
import ItemCity from './ItemCity';
import ContentItems from './ContentItems';

class SelectCity extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <HeaderSelectCity label={'Seleccione su ciudad'}/>
                <ContentItems>
                    <ItemCity cityName={'Poas'} onPress={this.props.openDashboard.bind(this)}/>
                    <ItemCity cityName={'Grecia'}/>
                    <ItemCity cityName={'Alajuela'}/>
                    <ItemCity cityName={'Sarchi'}/>
                </ContentItems>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        mainMenuData: state.mainMenuData
    };
};

export default connect(mapStateToProps, {openDashboard})(SelectCity);