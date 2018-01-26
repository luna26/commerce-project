import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View } from 'react-native';
import { Background, SearchBar } from '../common/';
import DashboardMenu from './DashboardMenu';
import MenuRow from './MenuRow';

class Dashboard extends Component {
    render() {
        const { containerStyle, containerSearchBar } = styles;
        return (
            <Background>
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
            </Background>
        );
    }
}

const styles = {
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