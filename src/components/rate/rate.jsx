import React, { Component, Fragment } from 'react';
import './rate.css'


class Rate extends Component {

    state = {

    }
    render() {

        const { APIData, WSData } = this.props;
        // console.log(WSData)
        const bids = []
        const asks = []

        for (let index in APIData.bids) {
            bids.push(APIData.bids[index])
        }
        for (let index in APIData.asks) {
            asks.push(APIData.asks[index])
        }

        return (
            <Fragment>
                <div className='container'>
                    <table className='bid'>
                        <tr>
                            <td>Amount</td>
                            <td>Price</td>
                            <td>Total</td>
                        </tr>
                        {bids.map((item) => (
                            <tr>
                                <td>{item[1]}</td>
                                <td>{item[0]}</td>
                                <td>{item[0] * item[1]}</td>
                            </tr>
                        ))}
                    </table>
                    <table className='ask'>
                        <tr>
                            <td>Amount</td>
                            <td>Price</td>
                            <td>Total</td>
                        </tr>
                        {asks.map((item) => (
                            <tr>
                                <td>{item[1]}</td>
                                <td>{item[0]}</td>
                                <td>{item[0] * item[1]}</td>
                            </tr>
                        ))}
                    </table>

                </div>
            </Fragment>
        );
    }

}




export default Rate;