import React from 'react'
import "./TodoMain.css";
import Todoitem from '../Todoitem/Todoitem';

export default function TodoMain(props) {
    //接收父组件传递过来的数据
    let { tododata, deldata, updata } = props

    return (
        <>
            <ul className="todo-main">
                {
                    tododata.map((item, index) => {
                        return <Todoitem key={item.id} deldata={deldata} updata={updata} item={item} index={index} />
                    })
                }
                {
                    tododata.length !== 0 ? "" : <li className='todo-empty'>暂无数据</li>
                }
            </ul>
        </>
    )
}
