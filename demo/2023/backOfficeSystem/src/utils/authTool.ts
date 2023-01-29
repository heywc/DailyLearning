/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-29 14:50:22
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-29 15:03:11
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/utils/authTool.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import DD_TOOLS from './ddTool';
import { Modal } from 'antd';
import { loginApi } from '../api/auth';

function autoLogin(beLogined:boolean) {
    let ddUserId = window.localStorage.getItem('YGL_DingUserId');
    return new Promise((resolve, reject) => {
        function toLogin(opts:any) {
            loginApi(opts).then(
                (data:any) => {
                    resolve(data);
                },
                (err:any) => {
                    reject(err);
                }
            );
        }
        if (!ddUserId || beLogined) {
            const staticSetDingID = () => {
                ddUserId = window.localStorage.getItem('YGL_DingUserId');
                if (ddUserId) {
                    const opts = { dingUserId: ddUserId, client: 'financial-management'};
                    toLogin(opts);
                } else {
                    Modal.info({
                        title: '调试提醒',
                        content: '在本地调试中，请在localStorage中手动设置YGL_DingUserId（YGL_DingUserId为本人钉钉userid）',
                    });
                }
            };
            const dynamicSetDingID = (type:string) => {
                DD_TOOLS.setupDDuser(
                    function () {
                        ddUserId = window.localStorage.getItem('YGL_DingUserId');
                        if (ddUserId) {
                            const opts = { dingUserId: ddUserId, client: 'financial-management'};
                            toLogin(opts);
                        }
                    },
                    function (info:any) {
                        if (type == 'test') {
                            staticSetDingID();
                        } else if (type == 'prod') {
                            reject(info);
                        }
                    }
                );
            };
            if (/localhost:/.test(window.location.host)) {
                staticSetDingID();
            } else if (/ding-test/.test(window.location.host)) {
                dynamicSetDingID('test');
            } else {
                dynamicSetDingID('prod');
            }
        } else {
            DD_TOOLS.setupDDconfig();
            const opts = { dingUserId: ddUserId, client: 'financial-management'};
            toLogin(opts);
        }
    });
}
export { autoLogin };