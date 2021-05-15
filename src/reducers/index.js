import { combineReducers } from 'redux';
import calenderReducer from './calenderReducer';

export default combineReducers({
    calender: calenderReducer // connects front end api to backend api
});