import React, { Component, Fragment } from 'react';

class Option extends Component {

    state = {
        options: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
        option: '',
    }


    handleSelectChange = ({ target: { value } }) => {
        const {changeSymbol} = this.props;
        changeSymbol(value)
        // console.log(test)
    }

    render() {
        const { options, option } = this.state;
        
        return (
            <Fragment>
                <select defaultValue={option} onChange={this.handleSelectChange}>
                    {options.map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))}
                </select>
            </Fragment>
        );
    }

}

export default Option;

// onChange={this.handleSelectChange}