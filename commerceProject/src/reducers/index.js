import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PerfilReducer from './PerfilReducer';

export default combineReducers({
    authReducer: AuthReducer,
    perfilReducer: PerfilReducer
});