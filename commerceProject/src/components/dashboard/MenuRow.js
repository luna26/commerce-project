import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IconDashboard from './IconDashboard';
import { connect } from 'react-redux';
import {openCategory} from '../../actions';

class MenuRow extends Component {
    render() {
        const { rowIcons } = styles;
        return (
            <View style={rowIcons}>
                <IconDashboard label={'Gastronomia'} icon={'icon_food'} onPress={this.props.openCategory.bind(this)}/>
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

const mapStateToProps = state => {
    return {
        mainMenuData: state.mainMenuData
    };
};

export default connect(mapStateToProps, {openCategory})(MenuRow);