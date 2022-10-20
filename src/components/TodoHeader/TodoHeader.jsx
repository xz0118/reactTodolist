import React, { useState } from 'react'
import "./TodoHeader.css"

export default function TodoHeader(props) {
     //接收父组件传递过来的数据
    let { adddata } = props;
    
    let [content, setContent] = useState("")
    //获取输入框内容传到usestate中
    let gettodo = (e) => {
        setContent(e.target.value)
    }
    //将输入框内容传到列表中
    let addcontent = (e) => {
        if (e.keyCode === 13 && e.target.value !== "") {
            adddata(content)
            setContent("")
        }
    }

    return (
        <>
            <div className="todo-header">
                <input type="text" onKeyUp={addcontent}
                    onChange={gettodo} value={content} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        </>
    )
}
