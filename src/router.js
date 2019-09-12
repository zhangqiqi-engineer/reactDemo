import React from "react"
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import HomeIndex from "./home"
import BlogIndex from "./blog"
import ResumeIndex from "./resume"
import UserIndex from "./user"
import TestComponent from './test/test.jsx'
import { Layout, Menu, Icon } from 'antd';
import './index.scss';
const { Header, Sider, Content } = Layout;

class AppRouter extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" ></div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="rooter">
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span><Link className="title" to="/home">home</Link></span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span><Link className="title" to="/blog">blog</Link></span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span><Link className="title" to="/resume">resume</Link></span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="pie-chart" />
                                <span><Link className="title" to="/user">user</Link></span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="desktop" />
                                <span><Link className="title" to="/test">test</Link></span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                background: '#fff',
                                minHeight: 280,
                            }}
                        >
                            <div>
                                {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                                <Switch>
                                    {/* exact */}
                                    <Route path="/home" component={HomeIndex} />
                                    <Route exact path="/blog" component={BlogIndex} />
                                    <Route exact path="/resume" component={ResumeIndex} />
                                    <Route exact path="/user" component={UserIndex} />
                                    <Route exact path="/test" component={TestComponent} />
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>

            </BrowserRouter>
        )
    }
}
export default AppRouter;