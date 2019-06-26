import React from "react";
import { Layout, Menu, Icon } from 'antd';
import logo from "../../images/QH.png";
const { Header, } = Layout;
const { SubMenu } = Menu;
export default class Topnav extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Header className="header">
                <div className="logo" >
                    <img src={logo} alt="这里是LOGO"/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">招生系统</Menu.Item>
                    <Menu.Item key="2">教学管理</Menu.Item>
                    <Menu.Item key="3">工单管理</Menu.Item>
                </Menu>
                <Menu
                    mode="inline"
                    className = "userlogoin"
                >
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="user" />
                                我的
                            </span>
                        }
                    >
                        <Menu.ItemGroup>
                            <Menu.Item key="setting:1" className="tuichu" >退出登录</Menu.Item>
                            
                        </Menu.ItemGroup>
                        
                    </SubMenu>
                </Menu>
            </Header>
        )
    }
}