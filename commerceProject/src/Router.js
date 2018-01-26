import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import SelectCity from './components/SelectCity/SelectCity';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key='login' component={Login}  hideNavBar={true} initial/>
                <Scene key='selectCity' component={SelectCity}  hideNavBar={true} />
                <Scene key='dashboard' component={Dashboard} hideNavBar={true} />
            </Scene>
        </Router>
    );
}

export default RouterComponent;