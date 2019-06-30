import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import Reducer from "store/reducer/reducer";
import usersreducer from "./usersreducer/usersreducer";
const reducer = combineReducers({
    Reducer,
    usersreducer
})
const store = createStore(reducer,applyMiddleware(reduxThunk));
export default store;