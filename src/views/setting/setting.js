import React from "react";
import { Card, Button } from 'antd';

export default class Setting extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div style={{ background: '#ECECEC'}} >
                <Card title="商家列表" bordered={false} extra={<Button>导出数据</Button>}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}