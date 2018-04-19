import 'babel-polyfill';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
/*eslint-disable import/default */
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadCoins } from './actions/coinActions';
import { loadExchanges } from "./actions/exchangeAction";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadCoins());
store.dispatch(loadExchanges());


render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider >,
    document.getElementById('app')
);

