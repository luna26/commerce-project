import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

class DashboardMenu extends Component {
    render() {
        const { containerStyle, scrollViewStyle, iconContainer } = styles;
        return (
            <View style={containerStyle}>
                <ScrollView style={scrollViewStyle} >
                    <View style={iconContainer}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 0.8,
        margin: 10,
        borderRadius: 10,
        overflow:'hidden'
    },
    scrollViewStyle: {
        flex: 1
    },
    iconContainer:{

    }
}

export default DashboardMenu;