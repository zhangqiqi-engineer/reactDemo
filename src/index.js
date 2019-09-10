import React from 'react'
import ReactDom from 'react-dom'
import Router from "./router.js"
import './index.css'

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍

import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index.js'
class App extends React.Component {
    render() {
        return (
            <div style={{ color: "#333" }} className="test test2">
                <Provider store={store}>
                    <Router />
                </Provider>
            </div>
        )
    }
}
ReactDom.render(<App />, document.getElementById("app"))
