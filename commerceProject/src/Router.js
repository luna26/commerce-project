import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import SelectCity from './components/SelectCity/SelectCity';
import Category from './components/category/Category';
import LoaderComp from './components/common/LoaderComp';
import PerfilRestaurant from './components/perfilRestaurant/PerfilRestaurant';
import SelectedPlace from './components/selectedPlace/SelectedPlace';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene>
                    <Scene key='login' component={Login} hideNavBar={true} initial />
                    <Scene key='loaderComp' component={LoaderComp} hideNavBar={true} />
                    <Scene key='dashboard' component={Dashboard} hideNavBar={true} />
                    <Scene key='category' component={Category} hideNavBar={true} />
                    <Scene key='perfilRestaurant' component={PerfilRestaurant} hideNavBar={true} />
                    <Scene key='selected-place' component={SelectedPlace} hideNavBar={true} />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;