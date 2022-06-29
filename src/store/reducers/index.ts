import {combineReducers} from "redux";
import {BoxReducer} from "./boxReducer";


export const rootReducer = combineReducers({
    box: BoxReducer
})

export type RootState = ReturnType<typeof  rootReducer>