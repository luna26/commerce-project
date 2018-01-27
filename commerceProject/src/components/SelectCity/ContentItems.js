import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from '../common/';

class ContentItems extends Component {
    render() {
        const { containerItem } = styles;
        return (
                <View style={containerItem}>
                    {this.props.children}
                </View>
        );
    }
}

const styles = {
    containerItem: {
        flex:1,
        marginTop:40,
        marginLeft:40,
        marginRight:40
    }
}

export default ContentItems;