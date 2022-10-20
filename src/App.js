import React from "react"
//引入app.js文件
import "./App.css";

import Todolist from "./pages/Todolist/Todolist";

class App extends React.Component {

    render() {
        //可以返回空标签还可以返回React.Fragment
        return <React.Fragment>
            <Todolist />
        </React.Fragment>
    }
}

export default App