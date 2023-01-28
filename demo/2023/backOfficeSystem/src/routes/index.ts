/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-28 14:10:30
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-28 15:22:18
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/routes/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from '../pages/home';
// import AutoLogin from '../pages/login/autoLogin';
// import MineCreate from '../pages/mineCreate';
// import MineCopied from '../pages/mineCopied';
// import MineResolve from '../pages/mineResolve';
// import BatchAssociation from '../pages/batchAssociation';
// import ContractList from '../pages/selfSupport/contractList';
// import CreateContract from '../pages/selfSupport/createContract';
// import ContractDetail from '../pages/selfSupport/contractDetail';
import NotFound from '../pages/notFound';


interface IRoute {
    path: string,
    id:string,
    component: any,
    children?:IRoute[]
}

const routerConfig:IRoute[] = [
    {
        path: "/404",
        id:'999',
        component: NotFound,
    },
    {
        path: "/home",
        id:'1',
        component: Home,
    },
];

export default routerConfig;