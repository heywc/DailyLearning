/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 11:26:49
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-28 16:46:55
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                    {/* <ConfigProvider locale={zh_CN}> */}
                        <App />
                    {/* </ConfigProvider> */}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
