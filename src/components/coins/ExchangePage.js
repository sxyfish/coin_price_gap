import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/exchangeAction';
import ExchangeList from './ExchangeListPage';
import {browserHistory} from 'react-router';

class ExchangePage extends Component {
    constructor(props, context) {
        debugger;
        super(props, context);
        this.onAddNewExchange=this.onAddNewExchange.bind(this);
    }
    
    onAddNewExchange(){
         browserHistory.push('/newexchange');
    }
    render() {

        const { exchanges } = this.props;
        debugger;
        return (
            <div>
                <h1>Exchanges Information</h1>
                <button
                    className="btn btn-primary" onClick={this.onAddNewExchange}>
                    Add Exchange
                </button>
                <ExchangeList exchanges={exchanges} />
            </div>

        );
    }
}

ExchangePage.propTypes = {
    exchanges: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, onwProps) {
    debugger;
    return {
        exchanges: state.exchanges
    };
}
function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ExchangePage);