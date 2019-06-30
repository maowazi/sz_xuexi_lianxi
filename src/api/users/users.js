import http from "utils/utils";

const login = (logindata)=>http.post("/app/mock/223048/users/login",logindata)

export default login