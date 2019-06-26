import React from "react";
import {Menu, Icon } from 'antd';
import {viwRoute} from "routers/routers";
import {withRouter} from "react-router-dom";
/**
 * 系统首页
 * 班级管理
 * 考试管理
 * 就业管理
 * 周报管理
 * 面试题管理
 */
const { SubMenu } = Menu;
class Leftnav extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['/anmin/home']}
                    defaultOpenKeys={['sub1']}
                    onClick={this.handclick.bind(this)}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        viwRoute.map((item) => (
                            item.children ? <SubMenu
                                key={item.pathName}
                                title={
                                    <span>
                                        <Icon type={item.icon} />
                                        {item.title}
                                    </span>
                                }
                            >
                                {
                                    item.children.map((item)=>(
                                        <Menu.Item key={item.pathName}><span><Icon type={item.icon}/></span>{item.title}</Menu.Item>
                                    ))
                                }
                            </SubMenu> : <Menu.Item key={item.pathName}>
                                            <span>
                                                <Icon type={item.icon} />
                                            </span>
                                            {item.title}
                                        </Menu.Item>
                        ))
                    }
                </Menu>
        )
    }
    handclick({key}){
        // console.log(key,this.props)
        this.props.history.push(key)
    }
}
export default withRouter(Leftnav);