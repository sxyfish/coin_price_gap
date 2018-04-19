import React, { PropTypes } from 'react';
import ExchangeListRow from './ExchangeListRowPage';

const ExchangeList = ({ exchanges }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Market</th>
                    <th>Volume(24h)</th>
                </tr>
            </thead>
            <tbody>
                {
                    exchanges.map(exchange =>
                        <ExchangeListRow key={exchange.exchange} exchange={exchange}/>
                    )
                }

            </tbody>
        </table>
    );
};
ExchangeList.propTypes={
    exchange:PropTypes.array.isRequired
};
export default ExchangeList;