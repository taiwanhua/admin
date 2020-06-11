/* 
   Date   : 2020-06-09 15:47:33
   Author : Arhua Ho
   Content: 映射拆分管理，待完成
*/
import React from 'react';
import { Error404 } from '../Pages/ErrorPages/404';
import { UserRoles } from '../Pages/MainPages/UserRoles';
import { UserUsers } from '../Pages/MainPages/UserUsers';
import { PermissionModule } from '../Pages/MainPages/PermissionModule';
import { PermissionPermission } from '../Pages/MainPages/PermissionPermission';
import { PermissionAssign } from '../Pages/MainPages/PermissionAssign';
import { LocalationCustomer } from '../Pages/MainPages/LocalationCustomer';
import { LocalationFootMaster } from '../Pages/MainPages/LocalationFootMaster';
import { LocalationShop } from '../Pages/MainPages/LocalationShop';
import { OrderOrderList1 } from '../Pages/MainPages/OrderOrderList1';
import { OrderOrderList2 } from '../Pages/MainPages/OrderOrderList2';
import { OrderOrderList } from '../Pages/MainPages/OrderOrderList';
import { DespatchDespatchTable } from '../Pages/MainPages/DespatchDespatchTable';
import { DespatchDespatchList } from '../Pages/MainPages/DespatchDespatchList';
import { NewFrom } from '../Pages/MainPages/NewFrom';
import { SystemMy } from '../Pages/MainPages/SystemMy';
import { Home } from '../Pages/MainPages/Home';
import { Login } from '../Pages/MainPages/Login';


export const navbarTitleMapping = {
   "/User/Roles": "用戶角色管理 / 角色管理",
   "/User/Users": "用戶角色管理 / 用戶管理",
   "/Permission/Module": "菜單權限管理 / 接口管理",
   "/Permission/Permission": "菜單權限管理 / 菜單管理",
   "/Permission/Assign": "菜單權限管理 / 權限分配",
   "/Localation/Customer": "門市與人員名單 / 顧客名單",
   "/Localation/FootMaster": "門市與人員名單 / 足健師名單",
   "/Localation/Shop": "門市與人員名單 / 門市名單",
   "/Order/OrderList1": "預約狀況 / 預約件數",
   "/Order/OrderList2": "預約狀況 / 預約率總覽",
   "/Order/OrderList": "預約狀況 / 預約清單",
   "/Despatch/DespatchTable": "任務調度 / 派遣單總覽",
   "/Despatch/DespatchList": "任務調度 / 足健師派遣",
   "/New/From": "新增問券",
   "/System/My": "系統管理 / 個人中心",
   "/404": "無此分頁",
   "/": "歡迎您",
};

export const urlMapping = {
   "/User/Roles": <UserRoles />,
   "/User/Users": <UserUsers />,
   "/Permission/Module": <PermissionModule />,
   "/Permission/Permission": <PermissionPermission />,
   "/Permission/Assign": <PermissionAssign />,
   "/Localation/Customer": <LocalationCustomer />,
   "/Localation/FootMaster": <LocalationFootMaster />,
   "/Localation/Shop": <LocalationShop />,
   "/Order/OrderList1": <OrderOrderList1 />,
   "/Order/OrderList2": <OrderOrderList2 />,
   "/Order/OrderList": <OrderOrderList />,
   "/Despatch/DespatchTable": <DespatchDespatchTable />,
   "/Despatch/DespatchList": <DespatchDespatchList />,
   "/New/From": <NewFrom />,
   "/System/My": <SystemMy />,
   "/": <Home />,
   "/404": < Error404 />,
   "/Login": <Login />,
};