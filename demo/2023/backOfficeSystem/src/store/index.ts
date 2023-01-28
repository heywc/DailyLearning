/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-11-24 11:35:47
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-12-13 19:49:15
 * @FilePath: /financial-management/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import processSlice from "./features/processSlice";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    menuList: menuSlice,
    process: processSlice
  },
});

export default store;