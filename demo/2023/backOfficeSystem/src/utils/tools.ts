/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-29 14:54:52
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-30 17:03:05
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/utils/tools.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const APP_TOOLS = {
    setCookie: function (name:string, value:any, expiresDays:number) {
        //写cookies函数
        var cookieString = name + '=' + escape(value),
            cookieDir = '/';

        cookieString = cookieString + '; path=' + cookieDir;
        // 判断是否设置过期时间
        if (expiresDays) {
            var date = new Date();
            date.setTime(date.getTime() + expiresDays * 3600 * 1000);
            cookieString += '; expires=' + date.toString();
        }
        document.cookie = cookieString;
    },
    getCookie: function (name:string) {
        var strCookie = document.cookie;
        if (strCookie) {
            var arrCookie = strCookie.split('; ');
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split('=');
                if (arr[0] == name) return unescape(arr[1]);
            }
        }
        return '';
    },
    clearCookie: function (name:string) {
        this.setCookie(name, '', -1);
    },
    // 获取路由参数对象
    getUrlParams: (urlStr:string) => {
        const url = new URL(urlStr);
        return url.searchParams
    },
    // 获取路由参数具体字段值
    getUrlParam: (urlStr:string, field:string) => {
        const url = new URL(urlStr);
        const searchParams = url.searchParams;
        return searchParams.get(field)
    },
    // 深拷贝
    deepClone: (target:any) => {
        if (typeof target === 'object') {
            let cloneTarget:any =  Array.isArray(target) ? []: {};
            for (const key in target) {
                cloneTarget[key] = APP_TOOLS.deepClone(target[key])
            }
            return cloneTarget
        } else {
            return target
        }
    }
}
export default APP_TOOLS;