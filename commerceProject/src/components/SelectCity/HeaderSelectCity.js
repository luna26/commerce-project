import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HeaderSelectCity extends Component {
    render() {
        const {headerStyleText, headerStyleContainer} = styles;
        return (
            <View style={headerStyleContainer}>
                <Text style={headerStyleText}>{this.props.label}</Text>
            </View>
        );
    }
}

const styles = {
    headerStyleContainer:{
      backgroundColor:'#FF6F00',
      height:60,
      justifyContent:'center',
      borderBottomWidth: 0.5,
      borderBottomColor:'#fff',
    },
    headerStyleText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20
    }
}

export default HeaderSelectCity;