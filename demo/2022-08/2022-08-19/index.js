/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-08-19 10:01:54
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-08-19 16:10:24
 * @FilePath: /DailyLearning/demo/2022-08/2022-08-19/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 画眼球
let eyeball = document.getElementById('eyeball'); // 获取eyeball元素
let eyeballChart = echarts.init(eyeball); // 初始化画布
let bigEye = document.getElementById('bigEye'); // 获取元素
let eyeType = 'close';
// ...其他代码
let leftRotSize = 0; // 旋转角度
let ballSize = 10; // 眼睛尺寸
let rotTimer; // 定时器
// 眼球
function getEyeballChart() {
    eyeballChart.setOption({
        series: [
            {
                type: 'gauge', // 使用仪表盘类型
                radius: '-20%', // 采用负数是为了让分割线从内向外延伸
                clockwise: false,
                startAngle: `${0 + leftRotSize * 5}`, // 加为逆时针旋转，乘5表示速度为leftRotSize的倍
                endAngle: `${270 + leftRotSize * 5}`, // 即变为每10微秒移动0.5度，1234678同理
                splitNumber: 3, // 分割数量，会将270度分割为3份，所以有四根线
                detail: false,
                axisLine: {
                    show: false,
                },
                axisTick: false,
                splitLine: {
                    show: true,
                    length: ballSize, // 分割线长度
                    lineStyle: {
                        shadowBlur: 20, // 阴影渐变
                        shadowColor: 'rgb(0, 238, 255)', // 阴影颜色
                        shadowOffsetY: '0',
                        color: 'rgb(0, 238, 255)', // 分割线颜色
                        width: 4, // 分割线宽度
                    }
                },
                // splitLine: {
                //     length: ballSize, // 分割线高度设置为眼球尺寸变量
                // },
                axisLabel: false,
            },
            {
                type: 'gauge',
                radius: '-20%',
                clockwise: false,
                // startAngle: '45', // 倾斜45度
                // endAngle: '315',
                startAngle: `${45 + leftRotSize * 5}`,
          		endAngle: `${315 + leftRotSize * 5}`,
                splitNumber: 3,
                detail: false,
                axisLine: {
                    show: false,
                },
                axisTick: false,
                splitLine: {
                    show: true,
                    length: ballSize,
                    lineStyle: {
                        shadowBlur: 20,
                        shadowColor: 'rgb(0, 238, 255)',
                        shadowOffsetY: '0',
                        color: 'rgb(0, 238, 255)',
                        width: 4,
                    }
                },
                axisLabel: false
            }
        ]
    })
}
// 休眠
function toSleep() {
    clearInterval(rotTimer); // 清除定时器
    rotTimer = setInterval(() => {
        getEyeballChart()
        if (eyeType === 'close') {
            ballSize -= 0.1; // 当闭眼时慢慢减小
            if(ballSize < 0) {
                eyeType = 'open'
            }
        }
        if (
            eyeType === 'open'
        ) {
            ballSize += 0.1; // 当睁眼时慢慢变大
            if(ballSize > 10) {
                eyeType = 'close'
            }
        }
        leftRotSize === 360 ? (leftRotSize = 0) : (leftRotSize += 0.1); // 旋转，
    }, 10);
}
getEyeballChart();
toSleep()