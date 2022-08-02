/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-08-02 11:57:06
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-08-02 21:09:35
 * @FilePath: /DailyLearning/demo/2022-08/2022-08-02/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// URLencode
function urlencode(clearString) {
    var output = '';
    var x = 0;
    function utf16to8(str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for(i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }
    clearString = utf16to8(clearString.toString());
    var regex = /(^[a-zA-Z0-9-_.]*)/;

    while (x < clearString.length) {
        var match = regex.exec(clearString.substr(x));
        if (match != null && match.length > 1 && match[1] != '') {
            output += match[1];
            x += match[1].length;
        } else {
            if (clearString[x] == ' ') {
                output += '+';
            } else {
                var charCode = clearString.charCodeAt(x);
                var hexVal = charCode.toString(16);
                output += '%' + ( hexVal.length < 2 ? '0' : '' ) + hexVal.toUpperCase();
            }
            x++;
        }
    }
    return output;
}


function getUrlParams(field) {
    // 通过 ? 分割获取后面的参数字符串
    if(!window.location.href.includes('?')) {
        return ''
    }
    let urlStr = window.location.href.split('?')[1];
    // 创建空对象存储参数
    let obj = {};
    // 再通过 & 将每一个参数单独分割出来
    let paramsArr = urlStr.split('&');
    for(let i = 0,len = paramsArr.length;i < len;i++){
        // 再通过 = 将每一个参数分割为 key:value 的形式
        let arr = paramsArr[i].split('=');
        obj[arr[0]] = arr[1];
    }
    return obj[field];
}

function funcUrlDel(name){
    var loca = window.location;
    var baseUrl = loca.origin + loca.pathname + "?";
    var query = loca.search.substr(1);
    if (query.indexOf(name)>-1) {
        var obj = {}
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        };
        delete obj[name];
        var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
        return url
    }else{
        return window.location.href;
    };
}
console.log(funcUrlDel('id'));

console.log(urlencode('https://app37766.eapps.dingtalkcloud.com/web/index.html?corpId=ding159e37c963eae133&state=taskDetails,7481f1df-be0a-4b01-88fe-207acf7efd89&ddtab=true'));

console.log(getUrlParams('id'));