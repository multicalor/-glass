export const updateData = data => {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export const updateCurrency = currency => {
    return {
        type: 'UPDATE_CURRENCY',
        currency
    }
    
}

export const updateWS = binanceDataWS => {
    return {
        type: 'UPDATE_WS',
        binanceDataWS
    }
}