import axios from 'axios';

//redux reducer types
import {GET_RESTAURANT} from './restaurant.type';

export const getRestaurant = () => async (dispatch) => {
    try{
        const restaurantList = await axios ({
            method: "GET",
            url: "http://localhost:4000/restaurant/?city=NCR", 
        });
        return dispatch({type:GET_RESTAURANT, payload: restaurantList.data });
    }catch(error){
        return console.log(error);
    }
}