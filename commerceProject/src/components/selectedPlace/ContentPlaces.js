import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SelectedPlace extends Component {
    render() {
        const {mainContainer} = styles;
        return (
            <View style={mainContainer}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    mainContainer:{
        marginTop:10
    }
}

export default SelectedPlace;