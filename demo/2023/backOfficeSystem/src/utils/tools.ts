/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-29 14:54:52
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-29 15:17:58
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
    getUrlParam: function (field:string) {
        // 通过 ? 分割获取后面的参数字符串
        if (!window.location.href.includes('?')) {
            return '';
        }
        var urlStr = window.location.href.split('?')[1];
        // 创建空对象存储参数
        var obj:any = {};
        // 再通过 & 将每一个参数单独分割出来
        var paramsArr = urlStr.split('&');
        for (var i = 0, len = paramsArr.length; i < len; i++) {
            // 再通过 = 将每一个参数分割为 key:value 的形式
            var arr = paramsArr[i].split('=');
            obj[arr[0]] = arr[1];
        }
        return obj[field];
    },
}
export default APP_TOOLS;