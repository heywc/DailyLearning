/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-28 13:45:42
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-28 15:04:42
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/hooks/useCheckedMenu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import routerConfig from "../routes"

export function useCheckedMenu () {
    const {pathname}  = useLocation();
    return useMemo(()=>{
        let selectedKey = '';
        let openKey = ''
        routerConfig.forEach(el => {
            if(!el.children) {
                if(el.path === pathname) {
                    selectedKey = el.id
                }
            } else {
                el.children.forEach(item => {
                    if (item.path === pathname) {
                        selectedKey = item.id
                        openKey = el.id
                    }
                })
            }
        });
        return [selectedKey, openKey]
    }, [pathname])
}