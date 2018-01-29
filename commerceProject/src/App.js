import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Router  from './Router';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen'

class App extends Component{
    render(){
        return(
            <Provider store={createStore(reducers)}>
                 <Router />
            </Provider>
        );
    }
}

export default App;