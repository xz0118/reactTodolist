import axios from "../http/http";

//请求todo数据
export function getAlldata() {
    return axios.get("/todo")
}

//添加todo数据
export function addTodoData(val) {
    return axios.post("/todo", val)
}

//删除单条todo数据
export function delTodoData(id) {
    return axios.delete(`/todo/${id}`)
}

//单条todo勾选与取消
export function todoCheck(id, done) {
    return axios.patch(`/todo/${id}`, { done })
}

//全部todo勾选与取消
export function todoAllCheck(tododata, done) {
    //批量请求
    let allreq = tododata.map(item => {
        return axios.patch(`/todo/${item.id}`, { done })
    })
    // 批量发送
    return Promise.all(allreq)
}

// 清除已完成
export function clearAll(tododata) {
    let sendAll = tododata.filter(item => item.done).map(item => {
        return axios.delete(`/todo/${item.id}`)
    })
    return Promise.all(sendAll)
}