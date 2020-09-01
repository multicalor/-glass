import { createStore } from 'redux';
import apiReducer from './apiReducer'

export default createStore(apiReducer);
