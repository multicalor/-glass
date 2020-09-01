import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './rate.css'


class Rate extends Component {

    render() {

        const { binanceData, binanceDataWS } = this.props;
        const bids = []
        const asks = []

        for (let index in binanceDataWS.b) {
            bids.push(binanceDataWS.b[index])
        }
        for (let index in binanceDataWS.a) {
            asks.push(binanceDataWS.a[index])
        }

        for (let index in binanceData.bids) {
            bids.push(binanceData.bids[index])
            if (bids.length > 500) {
                bids.shift()

            }
        }
        for (let index in binanceData.asks) {
            asks.push(binanceData.asks[index])
            if (asks.length > 500) {
                asks.shift()

            }
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

const mapStateToProps = (state) => {
    return {
        binanceData: state.binanceData,
        binanceDataWS: state.binanceDataWS,
    }
}

export default connect(mapStateToProps, null)(Rate);

// Component => Action => Reducer => connect + mapStateToProps => Component