/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-29 14:37:00
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-08 18:51:22
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/utils/axios.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import { message } from 'antd';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'api'
})

instance.defaults.headers.common['Content-Type'] = 'application/json';

instance.interceptors.request.use(
    (request) => {
        if (request.method === 'get') {
            request.params = {
                ...(request.params || {}),
            };
        }
        return request;
    },
    (err:any) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            if (Object.prototype.hasOwnProperty.call(response.data, 'code')) {
                if(response.data.code === 200) {
                    return response.data?.data;
                } else if(response.data.code === 401) {
                    // cookie过期处理 两种方式
                    // 1. 跳转至登录页重登

                    // 2. 自动重登
                    // // 重登
                    // autoLogin(true).then((res:any) => {
                    //     // console.log('重新登录成功'); 回调当前请求的接口
                    //     if(res.data.data.role?.menuList?.find(item=> item.f_id === 346)) {
                    //         const menuList = res.data.data.role?.menuList?.find(item=> item.f_id === 346).lowerMenuList;
                    //         localStorage.setItem('ygl_contract_menulist', JSON.stringify(menuList));
                    //     }
                    //     console.log('重登成功再调用当前接口');
                    //     const newInstance = axios.create({
                    //         withCredentials: true, //主要是添加这一行
                    //     })
                    //     // 重登成功，重新调用该接口
                    //     newInstance(response.config)
                    // })
                    // .catch(err=>{
                    //     console.log(err);
                    // })
                } else {
                    message.error(response.data.msg);
                    return Promise.reject(response.data);
                }
            }
        } 
        return response;
    },
    (err) => {
        console.log('响应失败..');
        // message.error(err?.response?.data?.msg || '网络连接失败');
        return Promise.reject(err.response);
    }
);

export default instance;