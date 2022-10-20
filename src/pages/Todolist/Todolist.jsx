import React, { useEffect, useState } from 'react'
import "./Todolist.css"
import TodoHeader from '../../components/TodoHeader/TodoHeader'
import TodoMain from '../../components/TodoMain/TodoMain'
import TodoFooter from '../../components/TodoFooter/TodoFooter'
import { getAlldata, addTodoData, delTodoData, todoCheck, todoAllCheck, clearAll } from "../../api/todo"

export default function Todolist() {

    let [tododata, setTododata] = useState([]);

    //添加数据
    let adddata = async (data) => {
        let result = await addTodoData({
            title: data,
            done: false
        })
        // console.log(result);
        setTododata([...tododata, result])

        // let newdata = {
        //     id: nanoid(),
        //     title: data,
        //     done: false
        // }
        // setTododata([...tododata, newdata])
    }

    //删除数据
    let deldata = async (id) => {
        // 发送删除请求
        await delTodoData(id)

        let newtododata = tododata.filter(item => {
            if (item.id !== id) {
                return item
            }
        })
        setTododata(newtododata)
    }
    
    //取消勾选和选中
    let updata = async (id, done) => {

        await todoCheck(id, done)

        let uptododata = tododata.map(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item
        })
        setTododata(uptododata)
    }

    //全部勾选
    let checkAll = async (done) => {

        await todoAllCheck(tododata, done);

        let newcheckAll = tododata.map(item => {
            item.done = done
            return item
        })
        setTododata(newcheckAll)
    }

    //清除已完成
    let delAll = async () => {

        await clearAll(tododata)

            let newdelAll = tododata.filter(item => {
                if (item.done !== true) {
                    return item
                }
            })
        setTododata(newdelAll)
    }

    //测试添加方法是否成功
    useEffect(() => {
        //     // adddata("123")
        //     console.log(tododata);
        //     // deldata(1)
    }, [tododata])

    // 用axios请求端口数据
    useEffect(() => {
        async function main() {
            let res = await getAlldata();
            setTododata(res)
        }
        main()
    }, [])

    return (
        <>
            <div className="todo-container">
                <div className="todo-wrap">
                    <TodoHeader adddata={adddata} />
                    <TodoMain tododata={tododata} deldata={deldata} updata={updata} />
                    <TodoFooter checkAll={checkAll} tododata={tododata} delAll={delAll} />
                </div>
            </div>
        </>
    )
}
