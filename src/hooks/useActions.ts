import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as BoxActionCreator from "../store/action-creators/box";


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(BoxActionCreator, dispatch)
}