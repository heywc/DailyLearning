/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-02-02 16:11:24
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-06 18:07:55
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/components/NavBar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { Button } from 'antd';
import React from 'react';
import '../styles/components/navBar.scss'


export default (props:any) => {
    const {changeTheme} = props;
    return (<div className='navBar'>
        <div className='navBarLeft'>
            导航栏左侧：展示的菜单
        </div>
        <div className='navBarRight'>
            <Button onClick={changeTheme}> 切换主题</Button>
            欢迎您：姓名
        </div>
        
    </div>)
}