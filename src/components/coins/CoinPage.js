import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/coinActions';
import CoinList from './CoinListPage';
import {browserHistory} from 'react-router';

class CoinPage extends Component {
    constructor(props, context) {
        debugger;
        super(props, context);
        this.onAddNewCoin=this.onAddNewCoin.bind(this);
    }
    
    onAddNewCoin(){
         browserHistory.push('/newcourse');
    }
    render() {

        const { coins } = this.props;
        debugger;
        return (
            <div>
                <h1>Coins Information</h1>
                <button
                    className="btn btn-primary" onClick={this.onAddNewCoin}>
                    Add Coin
                </button>
                <CoinList coins={coins} />
            </div>

        );
    }
}

CoinPage.propTypes = {
    coins: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, onwProps) {
    debugger;
    return {
        coins: state.coins
    };
}
function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);