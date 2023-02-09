/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-02-08 09:13:05
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-08 18:06:53
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/utils/theme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type IThemeMaps = {
    normal: any,
    dark: any,
    green: any,
}

const themeMaps:IThemeMaps = {
    // 主色调
    normal: {
        token: {
            colorPrimary: '#e8d639',
        },
    },
    // 暗黑色调
    dark: {
        token: {
            colorPrimary: '#854eca',
        },
    },
    // 绿色
    green:{
        token: {
            colorPrimary: '',
        },
    }
}
export default themeMaps
