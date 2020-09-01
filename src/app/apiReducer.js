const initialState = {
  binanceData: {},
  binanceDataWS: {},
  currency: "BTCUSDT",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        binanceData: action.data,
      };
      break;
    case "UPDATE_CURRENCY":
      return {
        ...state,
        currency: action.currency,
      };
      break;
    case "UPDATE_WS":
        return {
            ...state,
            binanceDataWS: action.binanceDataWS,
        }
  }

  return state;
};

export default reducer;
