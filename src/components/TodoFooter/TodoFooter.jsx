import React from 'react'
import "./TodoFooter.css"

export default function TodoFooter(props) {
    //接收父组件传递过来的数据
    let { checkAll, tododata, delAll } = props

    // 点击改变所有checked状态
    let allipt = (e) => {
        checkAll(e.target.checked);
        // console.log(e.target.checked);
    }

    //点击清除已完成
    let clearAll = () => {
        delAll()
    }

    return (
        <>
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={tododata.every(item=>item.done) && tododata.length !== 0}  onChange={allipt} />
                </label>
                <span>
                    <span>已完成{tododata.filter(item => item.done === true).length}</span> / 全部{tododata.length}
                </span>
                <button className="btn btn-danger" onClick={clearAll}>清除已完成任务</button>
            </div>
        </>
    )
}
