import React,{Fragment} from "react";
import wangEditor from "wangeditor";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Users extends React.Component{
    constructor(){
        super();
        this.state = {
            msg:"简单设计费",
            str:''
        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Fragment>
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <Form.Item
                        help=""
                    >
                        {getFieldDecorator('username', {
                            rules: [{ required: true}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="商家香茗"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item
                        help=""
                    >
                        {getFieldDecorator('password', {
                            rules: [{ required: true}],
                            
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="text"
                                placeholder="商家铭言"
                                
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('content', {
                            rules: [{ required: true }],

                        })(
                            //ref用来获取此元素的一种方法
                            <div ref={editor => this.editor = editor}>
                            </div>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            提交
                        </Button>
                    </Form.Item>
                    
                </Form>
            </Fragment>
        )
    }
    componentDidMount(){
        // var E = window.wangEditor//this指向不一样这里不能用
        
        this.editor = new wangEditor(this.editor)                  //添加富文本1步
        //初始化时做change绑定
        this.editor.customConfig.onchange = (html)=> {          //富文本添加文档要求的onchange事件可以获取到输入的内容
            // html 即变化之后的内容
            // console.log(html)
            this.props.form.setFieldsValue({                   //为了把输入的内容和表单里的一起拿到
                content: html,
              });

        }
        this.editor.create()                                        //添加富文本2步  
    }
    handleSubmit(e) {
        e.preventDefault();                                     //阻止默认事件
        this.props.form.validateFields((err, values) => {       //拿到所有输入框的值
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });

    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Users);
export default  WrappedNormalLoginForm;