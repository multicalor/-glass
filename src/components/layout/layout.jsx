import React, { Component } from "react";
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import fetch from 'node-fetch';
// import loadWS from '../../app/WebSocket'
import loadApi from '../../app/api';
import { updateData, updateWS, updateCurrency } from '../../app/actions';

import Nav from "../nav/nav";
import Rate from '../rate/rate'
import Option from '../option/option'
import Error from '../error/error'
import './layout.css'


class Layout extends Component {

    componentDidMount() {
        this.getExchangeGlass()

    }

    getExchangeGlass = () => {
        loadApi(this.props.currency)
            .then(data => {
                this.props.updateData(data);
            })
        this.startStreemExchangeGlassWS()
    }

    startStreemExchangeGlassWS = () => {
        const { updateWS } = this.props;
        
        const baseURL = `wss://stream.binance.com/ws/${this.props.currency.toLowerCase()}@depth`;
        const socket = new WebSocket(`${baseURL}`);

        socket.onmessage = (msg) => {
            const WSData = JSON.parse(msg.data);
            updateWS(WSData);
            console.log(WSData)
        };
        return socket;
    };

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Nav className='header' />

                    <Switch>
                        <Route exact path='/' render={(props) => <Rate {...props} />} />
                        <Route path='/op' render={(props) => <Option {...props} changeSymbol={this.getExchangeGlassAPI} />} />
                        <Route path='*' component={Error} />
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        currency: state.currency,
        binanceDataWS:  state.binanceDataWS
    }
}


export default connect(mapStateToProps, { updateData, updateWS, updateCurrency })(Layout);

