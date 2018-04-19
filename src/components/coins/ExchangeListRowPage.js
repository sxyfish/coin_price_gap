import React,{PropTypes} from 'react';


const ExchangeListRow=({exchange})=>{
    return(
        <tr>
            <td>{exchange.exchange}</td>
            <td>$+{exchange["volume24h"]}</td>
        </tr>
    );
};
export default ExchangeListRow;