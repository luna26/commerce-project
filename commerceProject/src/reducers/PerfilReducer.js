import {
    OPEN_OVERLAY_PERFIL,
    CLOSE_OVERLAY_PERFIL
} from '../actions/types';

const INITIAL_STATE = {
    overlayPerfil: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_OVERLAY_PERFIL:
            return { ...state, overlayPerfil: action.payload };
        case CLOSE_OVERLAY_PERFIL:
            return { ...state, overlayPerfil: action.payload };
        default:
            return state;
    }
};