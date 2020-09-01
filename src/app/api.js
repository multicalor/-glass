const fetch = require("node-fetch")
const WebSocket = require('ws');

const load = (symbolBook = 'BNBBTC') => {
    let API_URL = `https://www.binance.com/api/v1/depth?symbol=${symbolBook}&limit=10`

    return fetch(API_URL)
        .then(response => response.json());

}

export default load;