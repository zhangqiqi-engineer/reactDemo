import React from "react"
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import HomeIndex from "./home"
import BlogIndex from "./blog"
import ResumeIndex from "./resume"
import UserIndex from "./user"
class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/resume">resume</Link></li>
                    <li><Link to="/user">user</Link></li>
                </ul>
                <div>
                    {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                    <Switch>
                        {/* exact */}
                        <Route path="/home" component={HomeIndex} />
                        <Route exact path="/blog" component={BlogIndex} />
                        <Route exact path="/resume" component={ResumeIndex} />
                        <Route exact path="/user" component={UserIndex} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;
