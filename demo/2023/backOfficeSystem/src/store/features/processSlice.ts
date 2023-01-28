/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-12-13 19:19:35
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2022-12-13 19:49:07
 * @FilePath: /financial-management/src/store/features/processSlice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit';

interface iProcess {
    processNo: number;
    processData: object;
}
const initialState: iProcess = {
    processNo: 1,
    processData: null,
};

// 创建一个 Slice 
export const processSlice = createSlice({
  name: 'process',
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义改变关联进程进度的方法
    updateProcessNo: (state,newState) => {
        state.processNo = newState.payload
    },
    // 定义改变关联进程相关数据的方法
    updateProcessData: (state,newState) => {
        state.processData = newState.payload
    },
  },
});
export const { updateProcessNo, updateProcessData } = processSlice.actions;
export default processSlice.reducer;