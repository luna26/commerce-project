import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IconDashboard from './IconDashboard';

class MenuRow extends Component {
    render() {
        const { rowIcons } = styles;
        return (
            <View style={rowIcons}>
                <IconDashboard label={'Gastronomia'} />
                <IconDashboard label={'Gastronomia'} />
                <IconDashboard label={'Gastronomia'} />
                <IconDashboard label={'Gastronomia'} />
            </View>
        );
    }
}

const styles = {
    rowIcons:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:10,
        marginBottom:10
    }
}
export default MenuRow;