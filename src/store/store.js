import {createStore,combineReducers} from "redux";
import Reducer from "store/reducer/reducer";
const reducer = combineReducers({
    Reducer
})
const store = createStore(reducer);
export default store;