// 此处的状态数据已经和store里合并了所以组件里的action会发送到这里来;

const defaultReducer = {
    state:'',
    token:''
}
export default (state=defaultReducer,action)=>{
    switch(action.type){
        case "LOGINVALUE":
            let newstate = JSON.parse(JSON.stringify(state));
            newstate.state = action.val.data.state;
            newstate.token = action.val.data.token;
            // console.log(newstate)
            return newstate;
            break;

    }
    return state

}