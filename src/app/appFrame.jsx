//应用框架
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Routes from './router/router.jsx';
import { hot } from 'react-hot-loader';

import { Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';


const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
//用了Antd的框架报Warning是什么鬼。。。

import './appFrame.less';

const config = {
    theme: {
        default: 'light',
        darkColor: '#001121',
        next: (cur) => cur === 'dark' ? 'light' : 'dark'
    }
};

class AppFrame extends PureComponent {
    state = {
        nightMode: config.theme.default,
        collapsed: false,
    };

    onTheme = e => {
        this.setState({
            nightMode: config.theme.next(this.state.nightMode)
        }, () => {
            console.log('主题切换完成');
        });
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        const isNightMode = this.state.nightMode !== config.theme.default;

        return (
            <Layout className="appFrameWrapper" style={{ minHeight: '100vh' }}>
                <Sider theme={this.state.nightMode} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">
                        <Link to="/login">
                            <img src={require('./image/160ROG.png')} alt="logo" />
                        </Link>
                    </div>
                    <Menu className="menu" theme={this.state.nightMode}
                        defaultSelectedKeys={['1']} mode="inline">
                        <div className="themeWrapper">
                            <span style={{ display: this.state.collapsed ? 'none' : 'initial' }}>夜间模式</span>
                            <Switch checkedChildren="开" unCheckedChildren="关"
                                checked={isNightMode}
                                onChange={this.onTheme} />
                        </div>
                        <Menu.Item key="1">
                            <Link to="/app/resume">
                                <Icon type="idcard" />
                                <span>个人简历</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/app/share">
                                <Icon type="share-alt" />
                                <span>学习分享</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="work"
                            title={<span><Icon type="bars" /><span>作品列表</span></span>}>
                            <Menu.Item key="cby">
                                <Icon type="hdd" />
                                <span>川巴云点餐</span>
                            </Menu.Item>
                            <Menu.Item key="wyz">
                                <Icon type="hdd" />
                                <span>讯能无烟灶</span>
                            </Menu.Item>
                            <Menu.Item key="lccs">
                                <Icon type="hdd" />
                                <span>多邦灯管家</span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{
                        padding: '10px',
                        backgroundColor: isNightMode ? config.theme.darkColor : ''
                    }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <div children={Routes}></div>
                        </div>
                    </Content>
                    <Footer style={{
                        textAlign: 'center',
                        color: isNightMode ? 'white' : '',
                        backgroundColor: isNightMode ? config.theme.darkColor : ''
                    }}>
                        Develop by One
                    </Footer>
                </Layout>
            </Layout >
        );
    }
}

export default hot(module)(AppFrame);