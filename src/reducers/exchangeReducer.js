import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function exchangeReducer(state = initialState.exchanges, action) {

    switch (action.type) {
        case actionTypes.LOAD_EXCHANGE_SUCCESS:
            debugger;
            return action.exchanges;

        default:
            return state;
    }
}