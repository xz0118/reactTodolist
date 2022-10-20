import axios from "axios";
import NPprogress from "nprogress";
import "nprogress/nprogress.css"

//创建实例对象
let instance = axios.create({
    baseURL: "http://localhost:4000",
    timeout:5000
})

//配置请求拦截
instance.interceptors.request.use(config => {
    //展示进度条
    NPprogress.start()
    //请求返回配置
    return config
})
//配置返回拦截
instance.interceptors.response.use(response => {
    //关闭进度条
    NPprogress.done()
    // 返还返回值
    return response.data
}, error => {
    console.log("请求失败", error);
    //请求失败返还pending状态的promise
    return new Promise(() => { })
})

export default instance