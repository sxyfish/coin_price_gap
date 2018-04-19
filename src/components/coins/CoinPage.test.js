import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router';

class CoinPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            coins: [],
            url: ''

        };
    }

    componentDidMount() {
        axios.get(`https://min-api.cryptocompare.com/data/all/coinlist`)
            .then(res => {
                let baseUrl = "https://www.cryptocompare.com";
                let pickedKeys = ['ETH', 'XMR'];
                let data = res.data["Data"];
                debugger;
                let coinsSlice = pickedKeys.map(k => k in data ? data[k] : {});
                debugger;
                this.setState({ coins: coinsSlice, url: baseUrl });
            });
    }



    render() {
        return (
            <table>
                {this.state.coins.map(coin =>
                    <tr key={coin.Id}>
                        <td><img width="20" height="20" src={this.state.url + coin.ImageUrl} /></td>
                        <td><Link to={this.state.url + coin.Url}>{coin.CoinName}</Link></td>
                        <td>Rank From coin market cap</td>
                    </tr>

                )}
            </table>

        );
    }
}

export default CoinPage;