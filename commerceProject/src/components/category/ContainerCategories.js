import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HeaderCategory from './HeaderCategory';

class ContainerCategories extends Component {
    render() {
        const { containerStyle, textStyle } = styles;
        return (
            <View style={containerStyle}>
                 {this.props.children}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        marginLeft:30,
        marginRight:30,
        marginTop:30
    }, 
    textStyle:{

    }
}

export default ContainerCategories;