/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-04-24 10:40:29
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-04-24 11:23:17
 * @FilePath: /DailyLearning/demo/2023/virtualList/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, memo} from 'react'
import Virlist from './components/Virlist'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [items] = useState(Array(20000).fill(1));
    const ItemBox = memo(function({data='', index = 0, style={}}:any) {
        return (<div style={style} id ={`item-${index}`}>
            {data}
        </div>)
    })
    return (
        <>
            首页
            <Virlist list={items} containerHeight={500} ItemBox={ItemBox}></Virlist>
        </>
  )
}

export default App
