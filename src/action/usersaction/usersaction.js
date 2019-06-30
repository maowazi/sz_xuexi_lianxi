import login from "api/users/users";

const loginvalue = "LOGINVALUE";
const loginaction = (val)=>({
    type:loginvalue,
    val:val
})
export  const  loginactionAsync = (val)=>{
    return async (dispatch)=>{
        let data = await login(val);
        if (data.data) {
            window.sessionStorage.setItem("Token",data.data.token)
        }else{
            return
        }
        // console.log(data)
        dispatch(loginaction(data))

    }
}