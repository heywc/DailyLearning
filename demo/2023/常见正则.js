/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-13 16:14:52
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-13 17:58:19
 * @FilePath: /DailyLearning/demo/2023/常见正则.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 手机号
const cellPhoneReg1 = /^[1][3,4,5,6,7,8,9][0-9]{9}$/ 
const cellPhoneReg2 = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

// 座机（电话号)
const phoneReg =  /^(0\d{2,3})-?(\d{7,8})$/

// 姓名
const nameReg = /^[\u4e00-\u9fa5]{2,4}$/  // 2-4个中文字符正则

// 电子邮箱
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 身份证号
// 18位 精准校验
const idCardReg1 = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
// 15位 精准校验
const idCardReg2 = /^[1-9]\d{5}\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/
// 后6位 
const idCardReg3 =  /^(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
//  普通校验
const idCardReg4 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// QQ号
const QQReg = /^[1-9][0-9]\d{4,9}$/

// 邮政编码
const postalCodeReg = /^[1-9]\d{5}$/










