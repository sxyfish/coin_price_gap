import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoinPage from "./components/coins/CoinPage";
import ExchangePage from "./components/coins/ExchangePage";
//import PriceGapPage from "./components/coins/PriceGapPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="coins" component={CoinPage} />
        <Route path="exchanges" component={ExchangePage} />
        
    </Route>
);

