import { Actions } from 'react-native-router-flux';
import { OPEN_DASHBOARD } from './types';

export const openDashboard = (param) => {
    return {
        type: OPEN_DASHBOARD,
        payload: param
    };
};