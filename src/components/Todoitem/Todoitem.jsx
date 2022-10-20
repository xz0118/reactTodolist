import React, { useState } from 'react'

export default function Todoitem(props) {
    let { item, index, deldata, updata } = props

    let [id, setId] = useState();
    // console.log(tododata);

    //移入
    let changelist = (i) => {
        return () => {
            i >= 0 ? setId(i) : setId(null)
        }
    }
    //删除
    let delcon = (id) => {
        return () => {
            deldata(id)
        }
    }
    //更新  
    let upda = (id) => {
        return (e) => {
            //传入是否选中的状态
            updata(id, e.target.checked)
        }
    }

    return (
        <>
            <li onMouseEnter={changelist(index)} onMouseLeave={changelist(null)}>
                <label>
                    <input type="checkbox" checked={item.done} onChange={upda(item.id)} />
                    <span>{item.title}</span>
                </label>
                <button className="btn btn-danger"
                    style={{ display: id === index ? "block" : "none" }}
                    onClick={delcon(item.id)}
                >删除</button>
            </li>
        </>
    )
}
