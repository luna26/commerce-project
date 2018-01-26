import { Actions } from 'react-native-router-flux';
import { OPEN_SELECT_CITY } from './types';

export const openSelectCity = (param) => {
    Actions.selectCity();
    return {
        type: OPEN_SELECT_CITY,
        payload: param
    };
};