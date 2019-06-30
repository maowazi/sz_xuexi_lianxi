import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./login.css";
import QH from "../../images/QH.png";
import {connect} from "react-redux";
import {loginactionAsync} from "action/usersaction/usersaction";

class Login extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                >
                    <div><img src={QH} alt="这里是logo" /></div>
                    <Form.Item
                        label="用户名"
                    >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="输入用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item
                        label="密码"
                    >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="输入密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item className="loginfooter">
                        <div>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a className="login-form-forgot" href="javascript:;">
                                找回密码
                        </a>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                    </Button>
                        <a href="javascript:;">注册</a>
                    </Form.Item>
                </Form>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err,val)=>{
            // console.log(e,val,this.props)
            this.props.logingo(val)
        })
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);



const mapStateToProps = (state)=>({

})
const mapDispatchToProps = (dispatch)=>({
    logingo(val){
        dispatch(loginactionAsync(val))
        let _this = this
        setTimeout(function(){
            if (window.sessionStorage.getItem("Token")) {
                _this.history.push("/andmin")
            }
        },1000)
    }
    
})
export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm);