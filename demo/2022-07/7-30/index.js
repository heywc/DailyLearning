/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-07-30 11:26:13
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-07-30 11:33:41
 * @FilePath: /DailyLearning/demo/2022-07/7-30/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function Test() {
    this.num = 100;
    console.log(this);  // obj
    this.func = function(){
        console.log(this); // obj
        console.log(this.num); // 100
        setTimeout(function(){
            console.log(this); // window
            console.log(this.num); // undefined
        }, 500);
    };
}

var obj = new Test();
obj.func();