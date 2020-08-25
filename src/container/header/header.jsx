import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Nav from "../../components//nav/nav";
import Rate from '../../components/rate/rate'
import Option from '../../components/option/option'
import Error from '../../components/error/error'
import './header.css'

const fetch = require("node-fetch")
const WebSocket = require('ws');

class Header extends Component {
    state = {
        exchangeGlassWSData: {},
        exchangeGlassAPIData: this.startStreemExchangeGlassWS('BNBBTC'),
    }

    componentDidMount() {
        this.getExchangeGlassAPI('BNBBTC')
        // this.startStreemExchangeGlassWS('BNBBTC'.toLowerCase())
        
    }

    getExchangeGlassAPI = (symbolBook = 'BNBBTC') => {
        let API_URL = `https://www.binance.com/api/v1/depth?symbol=${symbolBook.toLowerCase()}&limit=500`

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    exchangeGlassAPIData: data,
                })
                
            });

    }

    startStreemExchangeGlassWS = (symbolBook = 'BNBBTC') => {

        const baseURL = `wss://stream.binance.com/ws/${symbolBook}@depth`;
        const socket = new WebSocket(`${baseURL}`);
        // socket.onmessage = (msg) => {
        //     const message = JSON.parse(msg.data);
        //     this.setState({ exchangeGlassWSData: message })
        // };
        return socket;
    };


    // onClick={this.getExchangeGlassAPI}

    render() {
        let { exchangeGlassAPIData, exchangeGlassWSData } = this.state;
        console.log(exchangeGlassAPIData)

        return (
            <div>
                <BrowserRouter>
                    <Nav className='header' />

                    <Switch>
                        <Route exact path='/' render={(props) => <Rate {...props} APIData={exchangeGlassAPIData} WSData={exchangeGlassWSData}/>} />
                        <Route path='/op' render={(props) => <Option {...props} changeSymbol={this.getExchangeGlassAPI} />} />
                        <Route path='*' component={Error} />
                    </Switch>

                </BrowserRouter>
            </div>
        )
    }
}

export default Header;

