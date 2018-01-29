import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Background, SearchBar } from '../common/';

class CategoryItem extends Component {
    render() {
        const {textStyle, headerStyleContainer, textStyle1} = styles;
        return (
            <TouchableOpacity style={headerStyleContainer} onPress={this.props.onPress}>
                <Text style={textStyle}>{this.props.itemName}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    headerStyleContainer:{
        borderBottomWidth: 0.5,
        borderBottomColor:'#fff',
        paddingBottom:10,
        marginBottom:25
    },
    textStyle:{
        color:'#fff',
        fontSize:20
    },
    textStyle1:{
        color:'#fff',
        fontSize:15
    }
}

export default CategoryItem;