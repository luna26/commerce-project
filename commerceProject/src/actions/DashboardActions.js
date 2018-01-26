import { Actions } from 'react-native-router-flux';
import { OPEN_CATEGORY } from './types';

export const openCategory = (param) => {
    Actions.category();
    return {
        type: OPEN_CATEGORY,
        payload: param
    };
};