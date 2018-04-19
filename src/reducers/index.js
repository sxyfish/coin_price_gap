import { combineReducers } from 'redux';
import coins from './coinReducer';
import exchanges from "./exchangeReducer";


const rootReducer = combineReducers({
    coins,
    exchanges
});

export default rootReducer;
