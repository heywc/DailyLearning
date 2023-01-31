/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2022-11-04 13:31:12
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-01-30 15:26:54
 * @FilePath: /financial-management/src/components/menuBar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import {useCheckedMenu} from "../hooks/useCheckedMenu";
import Icon from "./Icon"
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: any,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
}

export default (props:any) => {
    const {collapsed} = props;
    const [selectedKey,openKey] = useCheckedMenu();
    // const menulist = localStorage.getItem('ygl_contract_menulist') && JSON.parse(localStorage.getItem('ygl_contract_menulist')); 
    // let items: MenuItem[] = [
    //     getItem(<Link to="/home">模版-首页</Link>, '1', <Icon type={'icon-wochuangjiande'} fs="18px" mr="6px" ></Icon>),
    //     getItem(<Link to="/login">模版-登录页</Link>, '0', <Icon type={'icon-wochuangjiande'} fs="18px" mr="6px" ></Icon>),
    //     getItem(<Link to="/mineResolve">模版-数据汇总页</Link>, '348', <Icon type={'icon-yichulishixiang'} fs="18px" mr="6px" ></Icon>),
    //     getItem(<Link to="/mineCopied">模板-数据详情页</Link>, '349', <Icon type={'icon-chaosong'} fs="18px" mr="6px" ></Icon>),
    //     getItem(<Link to="/createContract">模板-数据可视化页</Link>, '350', <Icon type={'icon-chuangjianhetong'} fs="18px" mr="6px" ></Icon>),
    // ];
    const items: MenuItem[] = [
        getItem(<Link to="/home">模版-首页</Link>, '1', <PieChartOutlined />),
        getItem(<Link to="/login">模版-登录页</Link>, '0', <DesktopOutlined />),
        getItem(<Link to="/dataTotal">模版-数据汇总页</Link>, '348', <ContainerOutlined />),
        getItem(<Link to="/dataDetail">模板-数据详情页</Link>, '349', <MailOutlined />),
        getItem(<Link to="/dataVisualization ">模板-数据可视化页</Link>, '350', <AppstoreOutlined />),
    ];
    return <Menu 
        theme="dark"
        selectedKeys={[selectedKey]} 
        defaultOpenKeys={[openKey]}
        defaultSelectedKeys={['1']} 
        mode="inline"
        items={items}
    />
}