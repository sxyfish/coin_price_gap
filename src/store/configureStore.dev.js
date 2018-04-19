import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

export default function configureStore(initialState) {
    let socket = io('https://streamer.cryptocompare.com/');
    let socketIoMiddleware = createSocketIoMiddleware(socket);
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk,socketIoMiddleware,reduxImmutableStateInvariant())
    );
}