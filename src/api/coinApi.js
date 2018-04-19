import axios from "axios";
import apiAdd from "./config";


class CoinApi {
    static getCoinArray(num=10) {
        return axios.get(apiAdd.COIN_ARRAY_API_ADD);

    }
    static getExchangeArray(num=10) {
        return axios.get(apiAdd.EXCHANGE_ARRAY_API_ADD);
    }

    static getTradingPairsInExchanges(){
        return axios.get(apiAdd.TRADING_PAIRS_IN_EXCHANGE_API_ADD);
    }
}

export default CoinApi;