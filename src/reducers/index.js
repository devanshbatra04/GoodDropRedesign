import { combineReducers } from 'redux';
import LoginReducer from './login_reducer'

const rootReducer = combineReducers({
    loginDetails: LoginReducer
});

export default rootReducer;