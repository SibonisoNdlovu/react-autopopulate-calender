import { FETCH_CALENDER_DATA } from '../actions/types'

export default function(state=null, action){
    switch(action.type) {
        case FETCH_CALENDER_DATA:
            return action.payload || false;
        default:
            return state;
    };
};