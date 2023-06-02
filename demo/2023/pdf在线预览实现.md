<!--
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-05-31 11:58:21
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-06-02 16:40:04
 * @FilePath: /DailyLearning/demo/2023/pdf在线预览实现.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 需求背景
实现在PC端、移动端钉钉内置浏览器中查看员工简历的PDF。

## 技术方案
1. 标签 embed iframe object ；移动端设备浏览器中兼容性极差 尤其是安卓设备。 只作pc端预览的话，使用标签可行。
2. 第三方插件： PDF.js, 老项目中使用时，要防止工具包被打包后找不到对应的工具函数，可将工具包放到oss服务上。 新项目则通过npm装包使用即可。 兼容性好
3. 将pdf转图片