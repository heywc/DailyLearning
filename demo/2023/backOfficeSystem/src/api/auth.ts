/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-29 14:57:56
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-06 16:51:02
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/api/auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from '../utils/axios';
// import apiConfig from '../utils/apiConfig';
// const { API_URL } = apiConfig;

const base = import.meta.env.VITE_TARGET_URL ;
interface ILoginParams {
    dingUserId: string;
    client: string;
}

// 登录
export function loginApi(params: ILoginParams) {
    return axios.request({
        url: `${base}appservice/auth/dingUser/login`,
        method: 'post',
        params
    });
}