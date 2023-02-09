/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-02-08 11:22:59
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-08 19:35:59
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/store/features/themeSlice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit';

export interface MenuListState {
    themeName: string;
    themeDetail: object;
    // title: string;
}
const initialState: MenuListState = {
    themeName: 'normal',
    themeDetail:{
        token: {
            colorPrimary: '#e8d639',
        }
    }
};

// 创建一个 Slice 
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        updateThemeName: (state,newState) => {
            state.themeName = newState.payload
        },
        updateThemeDetail: (state,newState) => {
            state.themeDetail = newState.payload
        },
    },
});
export const { updateThemeName, updateThemeDetail } = themeSlice.actions;

// 默认导出
export default themeSlice.reducer;