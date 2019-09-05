import React from 'react'
import ReactDom from 'react-dom'
import Router from "./router.js"
import './index.css'
class App extends React.Component {
    render() {
        return (
            <div style={{ color: "#333" }} className="test test2">
                <Router />
            </div>
        )
    }
}
ReactDom.render(<App />, document.getElementById("app"))
