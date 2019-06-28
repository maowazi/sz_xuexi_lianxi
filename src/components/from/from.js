import  React from "react";
import {Form, Input,Icon } from 'antd';
import {connect} from "react-redux"
class From  extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        // console.log(this.props)//可以拿到定义在mapStateToprops里的data
        let {data} = this.props
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                {/* <Form.Item
                    label="商家名称"
                >
                    {getFieldDecorator('username', {
                        rules: [
                            { required: true, message: '请输入你的用户名!' },
                            // { pattern: /^[\u4eoo-\u9fa5]{3,8}$/, message: '输入需要三个以上,八个一下汉字!' }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="id"
                        />,
                    )}
                </Form.Item> */}
                <Form.Item
                    label="商家id"
                >

                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="id"
                        value= {data.id}
                    />

                </Form.Item>
                <Form.Item>

                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}//定义在表单内的图标
                        // type="password"
                        placeholder="name"
                        value={data.name}
                    />
                </Form.Item>
                <Form.Item>

                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="age"
                        value={data.age}
                    />
                </Form.Item>
                <Form.Item>

                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="phone"
                        value={data.phone}
                    />

                </Form.Item>
                <Form.Item>

                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="address"
                        value={data.address}
                    />

                </Form.Item>
            </Form>
        )
    }
}
const mapStateToProps = (state)=>({
    
    data:state.Reducer.data
})
const mapDispatchToProps = (dispatch)=>({

})
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(From);
export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm);