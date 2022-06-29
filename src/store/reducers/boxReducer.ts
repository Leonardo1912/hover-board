import {BoxActionTypes, BoxState, BoxAction} from "../../types/box";


const initialState: BoxState = {
    box: [],
    value: {},
    hovers:[]
}

export const BoxReducer = (state = initialState, action: BoxAction): BoxState => {
    switch (action.type) {
        case BoxActionTypes.FETCH_BOX:
            return {...state, box: action.payload}
        case BoxActionTypes.SET_VALUE:
            return {...state, value: action.payload}
        case BoxActionTypes.SET_HOVER:
            return {...state, hovers: [action.payload, ...state.hovers]}
        case BoxActionTypes.RESTART_HOVERS:
            return {...state, hovers: []}
        default:
            return state
    }
}