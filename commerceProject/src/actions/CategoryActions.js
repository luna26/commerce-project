import { Actions } from 'react-native-router-flux';
import { OPEN_CATEGORY } from './types';

export const pressItem = (param) => {
    Actions.category();
    return {
        type: OPEN_CATEGORY,
        payload: param
    };
};