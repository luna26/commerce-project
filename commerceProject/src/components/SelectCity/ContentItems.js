import React, { Component } from 'react';
import { View } from 'react-native';
import { Background, SearchBar } from '../common/';

class ContentItems extends Component {
    render() {
        const { containerItem } = styles;
        return (
            <Background>
                <View style={containerItem}>
                    {this.props.children}
                </View>
            </Background>
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