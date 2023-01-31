/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 11:26:49
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-31 14:24:48
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import { Routes, Route} from "react-router-dom";
import { Layout,theme } from 'antd';

import Home from './pages/home';
import MenuBar from "./components/MenuBar";
// import MineCreate from './pages/mineCreate';
// import MineCopied from './pages/mineCopied';
// import MineResolve from './pages/mineResolve';
// import ContractList from './pages/selfSupport/contractList';
// import CreateContract from './pages/selfSupport/createContract';
// import ContractDetail from './pages/selfSupport/contractDetail';
// import BatchAssociation from './pages/batchAssociation';
// import OrderCreate from './pages/singlePage/orderCreate';
// import OrderDetail from './pages/singlePage/orderDetail';

import NotFound from './pages/notFound';
import Login from './pages/login';
import logo from  './assets/logo.png'
import DataTotal from './pages/dataTotal';
const { Header, Content, Sider } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(()=>{
        let w = window.innerWidth;// 页面刚加载完成后获取浏览器窗口的大小
        if(w < 500) {
            setCollapsed(true)
        } else {
            setCollapsed(false)
        }
        window.addEventListener('resize', resizeUpdate);// 页面变化时获取浏览器窗口的大小 
        return () => {
            window.removeEventListener('resize', resizeUpdate);// 组件销毁时移除监听事件
        }
    }, [])
    const resizeUpdate = () => {
        let w = window.innerWidth;// 页面刚加载完成后获取浏览器窗口的大小
        if(w < 1200) {
            setCollapsed(true)
        } else {
            setCollapsed(false)
        }
    };
    // 如果第一次进入时，如果窗口过小，自动收起侧边栏
    return (
        <Layout style={{ minHeight: '100vh',minWidth:'800px' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div style={{textAlign: 'center', padding:'20px'}}>
                    {
                        collapsed ? 
                        <img src={'https://source.1kmxc.com/static-web-new/common/logo/ygl_icon_logo.png'} alt="" style={{width:'18px',height:'18px',borderRadius:'50%'}}/> 
                        : <img src={logo} alt="" style={{width:'86px',height:'19px'}}/>
                    }
                </div>
                <MenuBar></MenuBar>
            </Sider>
            <Layout className="site-layout">
                <Header style={{color:'#fff'}}>
                    heywc
                </Header>
                <Content>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/dataTotal' element={<DataTotal />} />
                        <Route path = '*' element={<NotFound />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
}

export default App;
