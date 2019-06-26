// import Home from "./home/home";
// import Login from "./login/login";
// import Notfount from "./Notfount/notfount";
// import Setting from "./setting/setting";
// import Users from "./users/users";

//按需加载
import Loadable from "react-loadable"
import Loading from "../component/loading/loading";
const Home = Loadable({
    loader:()=>import("./home/home"),
    loading:Loading,
});
const Login = Loadable({
    loader:()=>import("./login/login"),
    loading:Loading,
});
const Notfount = Loadable({
    loader:()=>import("./Notfount/notfount"),
    loading:Loading,
});
const Setting = Loadable({
    loader:()=>import("./setting/setting"),
    loading:Loading,
});
const Users = Loadable({
    loader:()=>import("./users/users"),
    loading:Loading,
});

export {
    Home,
    Login,
    Notfount,
    Setting,
    Users
}