/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-28 13:46:30
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-28 15:56:35
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/components/icon.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default (props:any)=>{
    const {fs, type, color, mr} = props;
    return (
        <svg className='icon' 
            aria-hidden="true" 
            style={{
                fontSize:fs || '16px', 
                color,
                marginRight:mr
            }}>
            <use xlinkHref={`#${type}`}></use>
        </svg>
    )
}