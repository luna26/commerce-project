import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ContentPlaces from './ContentPlaces';
import ItemPlace from './ItemPlace';

class SelectedPlace extends Component {
    render() {
        return (
            <View>
                <ContentPlaces>
                    <ItemPlace label={'Cercanos  a tu ubicacion'}/>
                    <ItemPlace label={'Pollo Crispy'}/>
                    <ItemPlace label={'Alitas'}/>
                </ContentPlaces>
            </View>
        );
    }
}

export default SelectedPlace;