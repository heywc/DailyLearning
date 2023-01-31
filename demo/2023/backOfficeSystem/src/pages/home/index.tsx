/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 15:30:48
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-31 14:17:52
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/pages/HomePage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React  from "react";
import './index.scss'
const HomePage: React.FC = ()=>{
    return (
        <div className="homePage">
            <div className="welcome">
                <div className="welcomeWord">欢迎使用~</div> 
                <div className="systemName">后台管理系统</div>
            </div>
        </div>
    )
}
export default HomePage