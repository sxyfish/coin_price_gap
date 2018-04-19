import React,{PropTypes} from 'react';


const CoinListRow=({coin})=>{
    return(
        <tr>
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td>{coin.price_usd}</td>
            <td>{coin["24h_volume_usd"]}</td>
        </tr>
    );
};
export default CoinListRow;