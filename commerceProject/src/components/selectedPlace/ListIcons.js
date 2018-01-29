import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

class ListIcons extends Component {
    render() {
        const {mainContainerStyle} = styles;
        return (
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={mainContainerStyle}>
                {this.props.children}
            </ScrollView>
        );
    }
}

const styles = {
    mainContainerStyle:{
        marginTop:10,
    }
}

export default ListIcons;