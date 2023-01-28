/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-12-05 10:46:43
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-12-13 19:20:00
 * @FilePath: /financial-management/src/store/features/menuSlice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit';

export interface MenuListState {
    value: any;
    title: string
}
const initialState: MenuListState = {
    value: [],
    title: "菜单权限列表"
};

// 创建一个 Slice 
export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    increment: (state) => {
        state.value += 1;
    },
    updateMenuList: (state,newState) => {
        state.value = newState
    }
  },
});
export const { updateMenuList } = menuSlice.actions;

// 默认导出
export default menuSlice.reducer;