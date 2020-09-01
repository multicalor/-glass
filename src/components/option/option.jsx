import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateCurrency } from '../../app/actions';

class Option extends Component {

    state = {
        options: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
        log: [],
    }


    handleSelectChange = ({ target: { value } }) => {
        const {updateCurrency, currency} = this.props;
        const {log} = this.state;
        updateCurrency(value)
        this.setState(({log}) => log.unshift(currency))
        console.log(this.state.log)
    }

    render() {
        const { options, log } = this.state;
        const { currency } = this.props;
        

        return (
            <Fragment>
                <select defaultValue={currency} onChange={this.handleSelectChange}>
                    {options.map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
                <ul>
                    {log.map(symb => (
                        <li key={symb}>{symb}</li>
                    ))}
                </ul>
            </Fragment>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        currency: state.currency
    }
}

export default connect(mapStateToProps, { updateCurrency })(Option);

