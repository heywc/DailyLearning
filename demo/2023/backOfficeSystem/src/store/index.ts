/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-11-24 11:35:47
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-10 18:05:01
 * @FilePath: /financial-management/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// index.ts 文件

// import { configureStore } from "@reduxjs/toolkit";
// import menuSlice from "./features/menuSlice";
// import processSlice from "./features/processSlice";
// import themeSlice  from "./features/themeSlice";
// // configureStore创建一个redux数据
// const store = configureStore({
//     // 合并多个Slice
//     reducer: {
//         menuList: menuSlice,
//         process: processSlice,
//         themeReducer: themeSlice
//     },
// });

// export default store;
import { combineReducers } from 'redux'
import { configureStore, createStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import processSlice from "./features/processSlice";
import themeSlice  from "./features/themeSlice";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['somethingTemporary']
}

const rootReducer = combineReducers({
    menuList: menuSlice,
    process: processSlice,
    themeReducer: themeSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }