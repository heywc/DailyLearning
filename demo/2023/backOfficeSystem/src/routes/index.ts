/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-28 14:10:30
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-29 13:33:14
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/routes/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from '../pages/home';
import Login from '../pages/login';
import NotFound from '../pages/notFound';

interface IRoute {
    path: string,
    id:string,
    component: any,
    children?:IRoute[]
}

const routerConfig:IRoute[] = [
    {
        path: "/",
        id:'-1',
        component: Login,
    },
    {
        path: "/login",
        id:'0',
        component: Login,
    },
    {
        path: "/home",
        id:'1',
        component: Home,
    },
    {
        path: "/404",
        id:'999',
        component: NotFound,
    },
];

export default routerConfig;