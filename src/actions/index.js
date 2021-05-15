import axios from 'axios';
import { FETCH_CALENDER_DATA } from './types';

 export const fetchCalenderData = () => async dispatch => {
    
    //implementation not complete due to time, also not part of requirements
    //mock data is used instead
    await axios.get('https://dinoparks.net/nudls/feed').
        then( response  =>
            dispatch({ type: FETCH_CALENDER_DATA, payload: response.data })
         ); 
    };