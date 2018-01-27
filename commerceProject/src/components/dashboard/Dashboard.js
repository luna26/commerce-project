import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View } from 'react-native';
import { Background, SearchBar } from '../common/';
import DashboardMenu from './DashboardMenu';
import MenuRow from './MenuRow';

class Dashboard extends Component {
    render() {
        const { containerStyle, containerSearchBar, mainContainer } = styles;
        return (
            <View style={mainContainer}>
                <View style={containerSearchBar}>
                    <SearchBar />
                </View>
                <View style={containerStyle}>
                    <DashboardMenu>
                        <MenuRow />
                        <MenuRow />
                        <MenuRow />
                        <MenuRow />
                    </DashboardMenu>
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer:{
        backgroundColor:'#FF6F00',
        flex:1
    },
    containerStyle: {
        justifyContent: 'center',
        flex: 4
    },
    containerSearchBar:{
        flex: 1,
        justifyContent:'center',
        paddingLeft:30,
        paddingRight:30,
        borderBottomWidth: 0.5,
        borderBottomColor:'#fff',
    }
}

export default Dashboard;