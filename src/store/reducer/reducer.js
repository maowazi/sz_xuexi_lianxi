import {tabvalue} from "action/actiontype/actiontype";

const defaultstate = {
    data:{}
}
export default (state=defaultstate,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case tabvalue:
            // console.log(action.val)
            newState.data = action.val;
            return newState
            break;
    
        default:
            break;
    }
    return state;
}