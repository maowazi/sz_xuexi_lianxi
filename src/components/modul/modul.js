import React from "react";
import { Modal, Button,Form,Icon, Input, Checkbox } from 'antd';
import WrappedNormalLoginForm from "components/from/from";

export default class Model extends React.Component{
    constructor(){
        super();
        this.state = { visible: false};
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    
    render(){
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                </Button>
                <Modal
                    title="修改商家信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <WrappedNormalLoginForm/>
                </Modal>
            </div>
        )
    }
    componentWillReceiveProps(props){
        this.setState({
            visible:props.parmas
        })
    }
}