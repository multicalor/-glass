import WebSocket from 'ws';
// import { connect } from 'react-redux'
// import { updateWS } from '../app/actions';

const stream = (symbolBook = 'BNBBTC'.toLowerCase()) => {

    const baseURL = `wss://stream.binance.com/ws/${symbolBook.toLowerCase()}@depth`;
    const socket = new WebSocket(`${baseURL}`);
    // socket.onmessage = (msg) => {
    //     const message = JSON.parse(msg.data);
    //     updateWS(message)
    // };
    return socket;
};

export default stream;
// export default connect(null, { updateWS })(strem);