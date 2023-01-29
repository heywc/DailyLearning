/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 11:26:49
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-29 17:05:33
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                    <ConfigProvider 
                        theme={{
                            token: {
                                colorPrimary: '#fadb14',
                            },
                        }}>
                        <App />
                    </ConfigProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
)
