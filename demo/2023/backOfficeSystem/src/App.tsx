/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 11:26:49
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-08 19:49:57
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react';
import { Routes, Route} from "react-router-dom";
import { ConfigProvider, Layout,theme } from 'antd';

import Home from './pages/home';
import MenuBar from "./components/MenuBar";
import NavBar from './components/NavBar';
import NotFound from './pages/notFound';
import Login from './pages/login';
import logo from  './assets/logo.png'
import DataTotal from './pages/dataTotal';

import themeMap from './utils/theme';

import "./styles/app.scss"
import { useDispatch, useSelector } from 'react-redux';
import { updateThemeDetail, updateThemeName } from "./store/features/themeSlice";

const { Header, Content, Sider } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    // const [mainTheme, setMainTheme] = useState<any>(themeMap.normal);
    // const [themeName,setThemeName] = useState<string>('normal');

    const dispatch = useDispatch();
    const { themeName, themeDetail } = useSelector((store:any) => store.themeReducer); // 关联进度

    useEffect(()=>{
        let w = window.innerWidth; //页面刚加载完成后获取浏览器窗口的大小
        if(w < 500) {
            setCollapsed(true)
        } else {
            setCollapsed(false)
        }
        window.addEventListener('resize', resizeUpdate); //页面变化时获取浏览器窗口的大小 
        return () => {
            window.removeEventListener('resize', resizeUpdate); //组件销毁时移除监听事件
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
    const changeTheme = (type?:string) => {
        // 后期迭代时 根据选中制定的主题色进行替换
        // if(Object.keys(themeMap).indexOf(type)) {
        //     setMainTheme(themeMap[type as keyof typeof themeMap])
        // }

        // // 当前版本支持 明暗色调切换
        // if(themeName === 'normal') {
        //     setThemeName('dark');
        //     setMainTheme(themeMap.dark)
            
        // } else {
        //     setThemeName('normal');
        //     setMainTheme(themeMap.normal)
        // }

        // 长效存储
        dispatch(updateThemeName(themeName === 'normal' ? 'dark' : 'normal'));
        dispatch(updateThemeDetail(themeName === 'normal' ? themeMap.dark : themeMap.normal));
    }
    // 如果第一次进入时，如果窗口过小，自动收起侧边栏
    return (
        <ConfigProvider 
            theme={themeDetail}
        >
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
                    <Header style={{backgroundColor:'#fff'}}>
                        {/* {themeName} */}
                        <NavBar changeTheme={changeTheme}></NavBar>
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
        </ConfigProvider>
    );
}

export default App;
