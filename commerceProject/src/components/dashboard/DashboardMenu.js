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
        backgroundColor: '#fff',
        flex: 0.7,
        margin: 10,
        borderRadius: 10,
    },
    scrollViewStyle: {
        flex: 1
    },
    iconContainer:{

    }
}

export default DashboardMenu;