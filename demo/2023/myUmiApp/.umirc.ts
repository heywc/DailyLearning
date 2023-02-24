/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-02-24 14:45:56
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-24 15:07:45
 * @FilePath: /DailyLearning/demo/2023/myUmiApp/.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'umi';

export default defineConfig({
    layout:{},
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/', component: '@/pages/index' },
    ],
    fastRefresh: {},
});
