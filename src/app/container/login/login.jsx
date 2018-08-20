import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
const FormItem = Form.Item;
import { fetchLogin } from '../../action/loginAction.jsx';

const mapStateToProps = (state) => ({
    login: state.login
});

const mapDispatchToProps = (dispatch) => ({
    fetchLogin: (...parameters) =>
        dispatch(fetchLogin(...parameters))
});

import './login.less';
class Login extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                location.replace('/app');
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const { loginResult } = this.props.login;
        let data = [];
        if (loginResult && loginResult.data)
            data = loginResult.data;

        let pData = [];
        if (pData = this.props.data)
            pData = pData = this.props.data;

        return (
            <div className='loginWrapper'>

                <Form onSubmit={this.handleSubmit} className="login-form">
                    <div className="greeting">
                        你好，今天！
                    </div>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '还没输入账号呢！' }],
                        })(
                            <Input autoComplete="off" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '是不是忘记输密码了呀？' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <br />
                        <Row type="flex" justify="space-around">
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                进入
                            </Button>
                        </Row>

                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
