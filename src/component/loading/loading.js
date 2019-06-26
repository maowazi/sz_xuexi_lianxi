import React from "react";
import { Spin } from 'antd';
import "./loading.css"
export default class Loading extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <div className="example">
                <Spin />
            </div>
        )
    }
}