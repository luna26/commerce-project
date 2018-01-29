import { Actions } from 'react-native-router-flux';
import { OPEN_OVERLAY_PERFIL
    ,CLOSE_OVERLAY_PERFIL 
} from './types';

export const openOverlayPerfil = (param) => {
    return {
        type: OPEN_OVERLAY_PERFIL,
        payload: param
    };
};

export const closeOverlayPerfil = (param) => {
    return {
        type: CLOSE_OVERLAY_PERFIL,
        payload: param
    };
};