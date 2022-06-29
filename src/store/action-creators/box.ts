import {Dispatch} from "redux";
import {BoxAction, BoxActionTypes} from "../../types/box";
import axios from "axios";

export const fetchBox = () => {
    return async (dispatch: Dispatch<BoxAction>) => {
        try {
            const response = await axios.get('http://demo7919674.mockable.io/')
            dispatch({type: BoxActionTypes.FETCH_BOX, payload: response.data})
        } catch (e) {

        }
    }
}
export const setCurrentValue = (value: {}) => {
    return (dispatch: Dispatch<BoxAction>) => {
        dispatch({type: BoxActionTypes.SET_VALUE, payload: value})
    }
}
export const setHover = (hover: {}) => {
    return (dispatch: Dispatch<BoxAction>) => {
        dispatch({type: BoxActionTypes.SET_HOVER, payload: hover})
    }
}
export const restartHovers = () => {
    return (dispatch: Dispatch<BoxAction>) => {
        dispatch({type: BoxActionTypes.RESTART_HOVERS})
    }
}
