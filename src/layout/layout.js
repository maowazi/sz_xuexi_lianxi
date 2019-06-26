import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Leftnav from "component/leftnav/leftnav";

import "./layout.css";
import Topnav from "component/topnav/topnav";



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class LayoutV extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <Layout>
                <Topnav/>
                <Layout>
                    {/* leftnav */}
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Leftnav/>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}