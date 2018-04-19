import React, { PropTypes } from 'react';
import CoinListRow from './CoinListRowPage';

const CoinList = ({ coins }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Rank(Market Cap)</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Volume(24h)</th>
                </tr>
            </thead>
            <tbody>
                {
                    coins.map(coin =>
                        <CoinListRow key={coin.id} coin={coin}/>
                    )
                }

            </tbody>
        </table>
    );
};
CoinList.propTypes={
    coins:PropTypes.array.isRequired
};
export default CoinList;