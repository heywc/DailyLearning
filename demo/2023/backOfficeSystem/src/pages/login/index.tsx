/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 17:26:33
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-02 17:37:39
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button } from "antd";
import React from "react";
import { loginApi } from "../../api/auth"
const LoginPage: React.FC = ()=>{
    const login = async()=> {
        const res = await loginApi({ 
            dingUserId: '16522540668669491', 
            client: 'financial-management'
        })
        console.log(res,'登录返回信息');
    }
    
    return (
        <div className="login">
            登录页面
            <Button onClick={login}> 点击登录</Button>
        </div>
    )
}
export default LoginPage