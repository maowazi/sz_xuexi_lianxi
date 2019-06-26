//路由的配置文件
import {Home,Login,Notfount,Setting,Users} from "../views/views";

//基础路由
const mainRoute = [
    {
        pathName:"/login",
        component:Login
    },
    {
        pathName:"/404",
        component:Notfount
    },
    
]

//页面级别路由
const viwRoute = [
    {
        pathName:"/andmin/home",
        component:Home,
        title:"系统首页",
        icon:"home"
    },
    {
        pathName:"/andmin/setting",
        component:Setting,
        title:"商铺管理",
        icon:"calendar",
        children:[
            {
                pathName:"/andmin/setting/StudentAtion",
                title:"学生管理",
                icon:"contacts"
            },
            {
                pathName:"/andmin/setting/Evaluation",
                title:"测评管理",
                icon:"contacts"
            }
        ]
    },
    {
        pathName:"/andmin/users",
        component:Users,
        title:"用户管理",
        icon:"calendar",
        children:[
            {
                pathName:"/andmin/users/usersAtion",
                title:"用户列表",
                icon:"contacts"
            },
            {
                pathName:"/andmin/users/usersJurisdiction",
                title:"用户权限",
                icon:"contacts"
            }
        ]
    },
    
]
export {
    mainRoute,
    viwRoute
}