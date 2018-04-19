import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function coinReducer(state = initialState.coins, action) {

    switch (action.type) {
        case actionTypes.LOAD_COIN_SUCCESS:
            debugger;
            return action.coins;

        default:
            return state;
    }
}